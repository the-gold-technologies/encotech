import React from 'react';

interface LinkTextProps {
  text: string;
  className?: string;
  linkClassName?: string;
}

export function LinkText({ text, className = "", linkClassName = "text-brand-pink hover:underline font-semibold" }: LinkTextProps) {
  if (!text) return null;

  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    const [fullMatch, linkText, linkUrl] = match;

    // Append preceding text
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    // Append link
    const isExternal = linkUrl.startsWith("http://") || linkUrl.startsWith("https://");
    parts.push(
      <a
        key={matchIndex}
        href={linkUrl}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={linkClassName}
      >
        {linkText}
      </a>
    );

    lastIndex = regex.lastIndex;
  }

  // Append remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return (
    <span className={className}>
      {parts.length > 0 ? parts : text}
    </span>
  );
}
