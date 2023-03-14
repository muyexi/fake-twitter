import React from 'react';

interface Props {
  label: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

const sizeStyles = {
  small: 'text-xs py-2.5 px-4',
  medium: 'text-xs py-3 px-5',
  large: 'text-xs py-3.5 px-6',
};

export const Button = ({
  label,
  primary = false,
  size = 'medium',
  type = 'button',
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={`shadow-1 cursor-pointer rounded-3xl border-0 font-sans font-bold drop-shadow
      ${
        primary
          ? 'bg-sky-500 text-white hover:bg-sky-600'
          : 'bg-slate-100 text-black hover:bg-slate-200'
      }
      ${sizeStyles[size]}
      `}
      onClick={props.onClick}
    >
      {label}
    </button>
  );
};
