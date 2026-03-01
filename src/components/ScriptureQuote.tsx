import React from 'react';
interface ScriptureQuoteProps {
  text: string;
  reference: string;
}
export function ScriptureQuote({ text, reference }: ScriptureQuoteProps) {
  return (
    <blockquote className="relative my-10 pl-8 py-6 pr-6 rounded-r-3xl bg-gold-light dark:bg-gold-light/5 border-l-[3px] border-gold dark:border-gold-dark">
      <p className="text-xl md:text-2xl italic font-heading text-gray-800 dark:text-gray-200 leading-relaxed">
        "{text}"
      </p>
      <footer className="mt-4 text-sm font-medium tracking-wide text-gold dark:text-gold-dark uppercase">
        — {reference}
      </footer>
    </blockquote>);

}