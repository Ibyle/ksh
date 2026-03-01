import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import {
  getFeaturedTeachings,
  getRecentTeachings,
  categories } from
'../data/teachings';
export function Home() {
  const featured = getFeaturedTeachings();
  const recent = getRecentTeachings(3);
  return (
    <PageTransition>
      <main className="pb-20">
        {/* Hero Section */}
        <section className="relative bg-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Grow in Grace and <span className="text-gold">Knowledge</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 font-sans max-w-2xl leading-relaxed">
                Welcome to the Kingdom Study Hub. A curated digital library of
                Bible studies, Sunday school materials, and sermons designed to
                build your faith.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/categories"
                  className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">

                  Start Reading <BookOpen className="h-5 w-5" />
                </Link>
                <Link
                  to="/downloads"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm transition-colors">

                  View Downloads
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Quick Links */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) =>
            <Link
              key={cat.id}
              to={`/categories?filter=${cat.id}`}
              className="bg-white dark:bg-warmDark-light p-6 rounded-xl shadow-lg shadow-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-800 group">

                <h3 className="text-xl font-heading font-bold text-navy dark:text-cream mb-2 group-hover:text-gold transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cat.description}
                </p>
              </Link>
            )}
          </div>
        </section>

        {/* Featured Teachings */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy dark:text-cream">
                Featured Studies
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Handpicked teachings for your spiritual growth
              </p>
            </div>
            <Link
              to="/categories"
              className="hidden md:flex items-center gap-1 text-gold hover:text-gold-dark font-medium transition-colors">

              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((teaching) =>
            <Link
              key={teaching.id}
              to={`/teaching/${teaching.slug}`}
              className="group flex flex-col bg-white dark:bg-warmDark-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800">

                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                  src={teaching.coverImage}
                  alt={teaching.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div className="absolute top-4 left-4 bg-navy/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                    {categories.find((c) => c.id === teaching.categoryId)?.name}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-bold text-navy dark:text-cream mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {teaching.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {teaching.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span>{teaching.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {teaching.readingTime} min
                      read
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </section>
      </main>
    </PageTransition>);

}