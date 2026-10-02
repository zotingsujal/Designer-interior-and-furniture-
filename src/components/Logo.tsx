import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  theme = 'dark',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? '#FAF9F5' : '#18181B';
  const subtextColor = isLight ? '#D4CECA' : '#27272A';

  const dimensions = {
    sm: { height: 32, width: 140 },
    md: { height: 42, width: 180 },
    lg: { height: 54, width: 230 },
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 280 84"
        width={dimensions.width}
        height={dimensions.height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-opacity hover:opacity-90"
        aria-label="Designer Furniture & Interior Logo"
      >
        {/* Intertwined 'D' and 'S' Monogram */}
        <g>
          {/* Big 'D' */}
          <path
            d="M 12 12 H 44 C 62 12 74 23 74 38 C 74 53 62 64 44 64 H 12 V 12 Z M 23 20 V 56 H 43 C 55 56 62 48 62 38 C 62 28 55 20 43 20 H 23 Z"
            fill={textColor}
          />
          {/* Stylized 'S' woven through 'D' */}
          <path
            d="M 52 24 C 47 18 39 16 32 18 C 22 21 24 31 34 34 C 47 38 56 42 54 53 C 52 62 41 66 30 64 C 23 62 18 57 16 52 L 23 48 C 24 51 28 56 34 56 C 41 56 44 52 44 48 C 44 44 38 41 30 38 C 21 34 16 29 17 21 C 18 13 28 9 37 10 C 44 11 49 14 53 19 L 52 24 Z"
            fill={textColor}
            fillOpacity="0.95"
          />
        </g>

        {/* 'igner' in refined high-contrast serif */}
        {/* Red square above the letter 'i' */}
        <rect x="76" y="24" width="7" height="7" fill="#C8232C" rx="0.5" />
        
        {/* Stem of 'i' */}
        <rect x="76.5" y="34" width="6" height="24" fill={textColor} rx="0.5" />

        {/* 'g' */}
        <text
          x="87"
          y="58"
          fontFamily="Georgia, serif"
          fontSize="36"
          fontWeight="bold"
          fill={textColor}
        >
          g
        </text>

        {/* 'ner' */}
        <text
          x="108"
          y="58"
          fontFamily="Georgia, serif"
          fontSize="36"
          fontWeight="bold"
          fill={textColor}
        >
          ner
        </text>

        {/* Underneath: 'FURNITURE & INTERIOR' */}
        <text
          x="14"
          y="77"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.28em"
          fill={subtextColor}
        >
          FURNITURE &amp; INTERIOR
        </text>
      </svg>
    </div>
  );
};
