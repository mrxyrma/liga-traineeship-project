import React from 'react';
import { LoaderProps } from './Loader.types';

export function Loader({ isLoading, children, variant = 'circle' }: LoaderProps) {
  const loaderClass = variant === 'dot' ? 'spinner-grow spinner-grow-sm' : 'spinner-border text-primary';

  return isLoading ? (
    <div className={loaderClass} style={{ margin: '0 auto' }} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    <>{children}</>
  );
}
