'use client';

import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-lg p-6 transition-all duration-300',
        hover && 'hover:shadow-2xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white/10 backdrop-blur-md rounded-2xl shadow-glass p-6 border border-white/20',
        className
      )}
    >
      {children}
    </div>
  );
}

