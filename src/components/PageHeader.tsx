import React from 'react';
import { PageId } from '../types.ts';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  onNavigate?: (page: PageId) => void;
  actionText?: string;
  onAction?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  onNavigate,
  actionText,
  onAction,
}) => {
  return (
    <div className="bg-forest text-softwhite py-14 sm:py-20 relative overflow-hidden border-b border-forest-light">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B5F45A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {onNavigate && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-greygreen mb-4">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-lime transition-colors focus-visible:outline-lime"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-lime font-medium">{badge}</span>
          </nav>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full bg-brand/30 border border-lime/30 text-lime text-xs font-bold uppercase tracking-wider mb-4">
              {badge}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-softwhite leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-greygreen leading-relaxed">
              {subtitle}
            </p>
          </div>

          {actionText && onAction && (
            <div className="shrink-0">
              <button
                onClick={onAction}
                className="px-6 py-3.5 rounded-xl bg-lime hover:bg-lime-hover text-forest font-bold text-xs uppercase tracking-wider transition-colors shadow-sm focus-visible:outline-lime"
              >
                {actionText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
