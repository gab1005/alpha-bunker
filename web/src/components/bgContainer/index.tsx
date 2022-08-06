import React, { JSXElementConstructor, ReactElement } from 'react';

interface Types {
  className?: string;
  theme?: 'light' | 'dark';
  children?: any;
}

/**
 * Archive: src/components/bgContainer/index.tsx
 *
 * Description: background padrão de toda pagina
 *
 * Date: 2022/07/01
 *
 * Author: Alehff
 */

export const BgContainer = ({
  className,
  theme = 'light',
  children,
}: Types) => {
  return (
    <div
      className={`w-screen h-screen bg-body-light-200 font-brand flex flex-col justify-center items-center gap-2 ${className} ${theme}`}
    >
      {children}
    </div>
  );
};
