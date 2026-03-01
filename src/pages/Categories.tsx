import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Clock, BookOpen } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { teachings, categories, searchTeachings } from '../data/teachings';
export function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get('filter') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const filteredTeachings = searchQuery ?
  searchTeachings(searchQuery) :
  currentFilter === 'all' ?
  teachings :
  teachings.filter((t) => t.categoryId === currentFilter);
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-heading font-bold text-navy dark:text-cream mb-4">
            Library
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Browse our complete collection of teachings, sermons, and study
            materials.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSearchParams({})}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentFilter === 'all' ? 'bg-navy text-white dark:bg-gold dark:text-navy' : 'bg-white dark:bg-warmDark-light text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}>

              All
            </button>
            {categories.map((cat) =>
            <button
              key={cat.id}
              onClick={() =>
              setSearchParams({
                filter: cat.id
              })
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentFilter === cat.id ? 'bg-navy text-white dark:bg-gold dark:text-navy' : 'bg-white dark:bg-warmDark-light text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}>

                {cat.name}
              </button>
            )}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search teachings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg leading-5 bg-white dark:bg-warmDark-light text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm transition-colors" />

          </div>
        </div>

        {/* Grid */}
        {filteredTeachings.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachings.map((teaching) =>
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
          </div> :

        <div className="text-center py-20">
            <BookOpen className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-navy dark:text-cream">
              No teachings found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Try adjusting your search or filters.
            </p>
          </div>
        }
      </div>
    </PageTransition>);

}