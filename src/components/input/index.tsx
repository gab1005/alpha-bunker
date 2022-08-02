import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from 'react';

interface PropTypes {
  category: 'default' | 'filled' | 'error';
  type?: 'text' | 'number';
  classNameInput?: string;
  classNameText?: string;
  placeholder?: string;
  descriptionBottom?: string;
  children?: JSX.Element | JSX.Element[];
  // function?: (category: string, descriptionBottom: string) => ReactElement;
}

// function ChangeTypeInput(category: string, descriptionBottom: string): string {
//   // | 'filled' | 'error'
//   const [Element, setElement]: any = useState('');

//   if (category == 'default') {
//     setElement('');
//   }
//   if (category == 'filled') {
//     setElement(`
//       <p className="h-3 text-[0.6875em] p-0 m-0 text-input-inactive ">
//         {descriptionBottom}
//       </p>,
//     `);
//   }
//   if (category == 'error') {
//     setElement(`
//       <p className="h-3 text-[0.6875em] p-0 m-0 text-input-error ">
//         Este campo é requirido
//       </p>,
//     `);
//   }

//   return Element;
// }

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
  classNameInput,
  placeholder,
  descriptionBottom = '',
  children,
}: PropTypes) => {
  return (
    <div className="gap-0 m-0 p-0">
      <input
        type={type}
        placeholder={placeholder}
        className={`
        ${classNameInput}
        ${category}
        w-64 h-8 text-input-text bg-input-base border-input-border border-2 rounded-[5px] px-3 py-2 m-0 text-1 leading-[1.1875em]
        `}
      />

      {/* <p className="h-3 text-[0.6875em] p-0 m-0 text-input-inactive ">
        {descriptionBottom}
      </p> */}

      {/* {ChangeTypeInput(category, descriptionBottom)} */}
    </div>
  );
};
