import React from 'react';

export const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }): React.ReactElement => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);
