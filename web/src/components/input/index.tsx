import React, { KeyboardEventHandler, useState } from 'react';
interface PropTypes {
  category: 'default' | 'filled' | 'error';
  type?: 'text' | 'number';
  className?: string;
  placeholder?: string;
  descriptionBottom?: string;
  children?: JSX.Element | JSX.Element[];
  value: string;
  // onChange: KeyboardEventHandler<any>;
  onChange: (value: any) => void;
  // onChange: React.ChangeEvent<HTMLInputElement>;
  // onChange: any;
}

/**
 * Archive: src/pages/Home.tsx
 *
 * Description: Home page
 *
 * Date: 2022/07/31
 *
 * Author: Gabriel de Sousa (gab1005)
 */

// to do:
// change descriptionBottom
// theme dark end ligth

export const Input = ({
  category,
  type = 'text',
  className,
  placeholder,
  value,
  onChange,
  descriptionBottom = '',
  children,
}: PropTypes) => {
  return (
    <div className="gap-0 m-0 p-0">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
        w-64 h-8 text-input-text bg-input-base border-input-border border-2 rounded-[5px] m-0 text-1 leading-[1.1875em]
        ${category}
        ${className}
        `}
      />
    </div>
  );
};
