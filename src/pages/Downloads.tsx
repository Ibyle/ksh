import React, { useState } from 'react';
import { Download, FileText, Search } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { teachings, categories } from '../data/teachings';
export function Downloads() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredTeachings = teachings.filter(
    (t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-heading font-bold text-navy dark:text-cream mb-4">
            Downloads
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Access PDF versions of our teachings for offline study, printing,
            and sharing with your small groups.
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for a PDF..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-white dark:bg-warmDark-light text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors shadow-sm" />

        </div>

        <div className="bg-white dark:bg-warmDark-light rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {filteredTeachings.map((teaching) =>
            <div
              key={teaching.id}
              className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">

                <div className="flex items-start gap-4">
                  <div className="bg-navy/5 dark:bg-gold/10 p-3 rounded-lg hidden sm:block">
                    <FileText className="h-6 w-6 text-navy dark:text-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        {
                      categories.find((c) => c.id === teaching.categoryId)?.
                      name
                      }
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-navy dark:text-cream">
                      {teaching.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      By {teaching.author} • PDF • ~
                      {(Math.random() * 3 + 1).toFixed(1)} MB
                    </p>
                  </div>
                </div>

                <button
                className="flex items-center justify-center gap-2 px-4 py-2 bg-navy hover:bg-navy-light dark:bg-gold dark:hover:bg-gold-light text-white dark:text-navy font-medium rounded-lg transition-colors w-full sm:w-auto"
                onClick={() =>
                alert(
                  'PDF Download simulation started for: ' + teaching.title
                )
                }>

                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            )}

            {filteredTeachings.length === 0 &&
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                No downloadable resources found matching your search.
              </div>
            }
          </div>
        </div>
      </div>
    </PageTransition>);

}