import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Download,
  ChevronLeft } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { RichContent } from '../components/RichContent';
import { getTeachingBySlug, teachings, categories } from '../data/teachings';
export function StudyView() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const teaching = getTeachingBySlug(slug || '');
  // Progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!teaching) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-heading font-bold mb-4">
          Teaching not found
        </h2>
        <button
          onClick={() => navigate('/categories')}
          className="text-gold hover:underline flex items-center gap-2">

          <ArrowLeft className="h-4 w-4" /> Back to Library
        </button>
      </div>);

  }
  const category = categories.find((c) => c.id === teaching.categoryId);
  // Find prev/next teachings
  const currentIndex = teachings.findIndex((t) => t.id === teaching.id);
  const prevTeaching = currentIndex > 0 ? teachings[currentIndex - 1] : null;
  const nextTeaching =
  currentIndex < teachings.length - 1 ? teachings[currentIndex + 1] : null;
  const formattedDate = new Date(teaching.createdDate).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );
  return (
    <PageTransition>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gold origin-left z-50 no-print"
        style={{
          scaleX
        }} />


      <article className="pb-24">
        {/* Header Section */}
        <header className="max-w-[700px] mx-auto px-4 pt-12 pb-8">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-navy dark:text-gray-400 dark:hover:text-gold transition-colors mb-8 no-print">

            <ChevronLeft className="h-4 w-4" /> Back to Library
          </Link>

          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              {category?.name}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy dark:text-cream leading-tight mb-6">
            {teaching.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-8">
            <div className="flex items-center gap-2 font-medium text-gray-900 dark:text-gray-200">
              <div className="h-8 w-8 rounded-full bg-navy/10 dark:bg-gold/20 flex items-center justify-center text-navy dark:text-gold font-bold">
                {teaching.author.charAt(0)}
              </div>
              {teaching.author}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formattedDate}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {teaching.readingTime} min read
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="max-w-[700px] mx-auto px-4">
          {/* Cover Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={teaching.coverImage}
              alt={teaching.title}
              className="w-full h-auto object-cover aspect-[21/9]" />

          </div>

          {/* Rich Text Body */}
          <RichContent html={teaching.content} />

          {/* Actions Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-4 no-print">
            <button
              onClick={() => alert('Share dialog opened')}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-gray-700 dark:text-gray-300">

              <Share2 className="h-4 w-4" /> Share Teaching
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white dark:bg-gold dark:text-navy hover:bg-navy-light dark:hover:bg-gold-light transition-colors font-medium">

              <Download className="h-4 w-4" /> Save as PDF
            </button>
          </div>

          {/* Prev/Next Navigation */}
          <nav className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 no-print">
            {prevTeaching ?
            <Link
              to={`/teaching/${prevTeaching.slug}`}
              className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gold dark:hover:border-gold transition-colors flex flex-col items-start">

                <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Previous
                </span>
                <span className="font-heading font-bold text-navy dark:text-cream group-hover:text-gold transition-colors line-clamp-1">
                  {prevTeaching.title}
                </span>
              </Link> :

            <div />
            }

            {nextTeaching ?
            <Link
              to={`/teaching/${nextTeaching.slug}`}
              className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gold dark:hover:border-gold transition-colors flex flex-col items-end text-right">

                <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                  Next <ArrowRight className="h-3 w-3" />
                </span>
                <span className="font-heading font-bold text-navy dark:text-cream group-hover:text-gold transition-colors line-clamp-1">
                  {nextTeaching.title}
                </span>
              </Link> :

            <div />
            }
          </nav>
        </div>
      </article>
    </PageTransition>);

}