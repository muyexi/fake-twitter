import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { User } from '@/utils/type';

type Props = {
  name: 'name' | 'password';
  placeholder: string;
  register: UseFormRegister<User>;
  errors: FieldErrors<User>;
};

export const Input = (props: Props) => {
  return (
    <>
      <input
        className="mb-4 h-8 place-content-stretch rounded border-solid border-slate-300 p-1 focus:border-sky-500 focus:outline-none"
        placeholder={props.placeholder}
        type={props.name == 'password' ? 'password' : 'text'}
        {...props.register(props.name, { required: true })}
      />
      {props.errors[props.name] && (
        <div className="mb-2 font-sans text-xs text-red-400">
          {props.name} is required
        </div>
      )}
    </>
  );
};
