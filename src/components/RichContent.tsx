import React from 'react';
interface RichContentProps {
  html: string;
}
export function RichContent({ html }: RichContentProps) {
  return (
    <div
      className="teaching-content"
      dangerouslySetInnerHTML={{
        __html: html
      }} />);


}