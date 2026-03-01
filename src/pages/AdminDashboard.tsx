import React, { useState } from 'react';
import {
  Save,
  Image as ImageIcon,
  FileText,
  LayoutDashboard } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { categories } from '../data/teachings';
export function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  if (!isLoggedIn) {
    return (
      <PageTransition className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-warmDark-light p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="text-center mb-8">
            <LayoutDashboard className="h-12 w-12 text-navy dark:text-gold mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-navy dark:text-cream">
              Admin Login
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Access the Kingdom Study Hub dashboard
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
            className="space-y-4">

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-gold outline-none transition-all dark:text-white"
                defaultValue="admin@kingdomstudy.org" />

            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-gold outline-none transition-all dark:text-white"
                defaultValue="password" />

            </div>
            <button
              type="submit"
              className="w-full bg-navy hover:bg-navy-light dark:bg-gold dark:hover:bg-gold-light text-white dark:text-navy font-bold py-3 rounded-lg transition-colors mt-6">

              Sign In
            </button>
          </form>
        </div>
      </PageTransition>);

  }
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Teaching saved successfully! (Mock action)');
    }, 1000);
  };
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-navy dark:text-cream">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Create and manage library content
            </p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-sm text-gray-500 hover:text-navy dark:hover:text-white font-medium">

            Sign Out
          </button>
        </div>

        <div className="bg-white dark:bg-warmDark-light rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 md:p-8">
          <h2 className="text-xl font-heading font-bold mb-6 border-b border-gray-100 dark:border-gray-800 pb-4 text-navy dark:text-cream">
            Create New Teaching
          </h2>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Power of Grace"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-gold outline-none transition-all dark:text-white" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Author
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pastor John"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-gold outline-none transition-all dark:text-white" />

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-gold outline-none transition-all dark:text-white">

                    <option value="" disabled selected>
                      Select a category
                    </option>
                    {categories.map((c) =>
                    <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    )}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Cover Image URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://..."
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-gold outline-none transition-all dark:text-white" />

                    <button
                      type="button"
                      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">

                      <ImageIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Summary
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-gold outline-none transition-all dark:text-white resize-none"
                    placeholder="Brief description for the card...">
                  </textarea>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between">
                <span>Content (Rich HTML)</span>
                <span className="text-xs text-gray-500 font-normal">
                  Use &lt;span class="verse"&gt; for scriptures
                </span>
              </label>
              <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-gold transition-all">
                <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-2 border-b border-gray-300 dark:border-gray-700 flex gap-2">
                  <button
                    type="button"
                    className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-300">

                    <strong className="font-serif">B</strong>
                  </button>
                  <button
                    type="button"
                    className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-300">

                    <em className="font-serif">I</em>
                  </button>
                  <button
                    type="button"
                    className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-300">

                    <FileText className="h-4 w-4" />
                  </button>
                </div>
                <textarea
                  required
                  rows={15}
                  className="w-full p-4 bg-transparent outline-none dark:text-white font-mono text-sm resize-y"
                  placeholder="<h1>Title</h1><p>Start writing here...</p>">
                </textarea>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <button
                type="button"
                className="px-6 py-2.5 rounded-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">

                Save Draft
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-2.5 rounded-lg font-medium bg-navy hover:bg-navy-light dark:bg-gold dark:hover:bg-gold-light text-white dark:text-navy transition-colors flex items-center gap-2 disabled:opacity-70">

                {isSaving ?
                'Publishing...' :

                <>
                    <Save className="h-4 w-4" /> Publish Teaching
                  </>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>);

}