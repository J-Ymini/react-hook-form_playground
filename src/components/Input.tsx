import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = {
  label?: string;
  htmlFor?: string;
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, htmlFor, className, error, ...props }, ref) => (
    <div>
      <div className="flex flex-col">
        {label && (
          <label
            className="text-white text-left text-bold"
            htmlFor={label ?? htmlFor}
          >
            {label}
          </label>
        )}
        <input
          className="mb-4 p-3 rounded-lg"
          id={label ?? htmlFor}
          ref={ref}
          {...props}
        />
      </div>
      {error ? (
        <div className="text-red-500 h-5">{error.message}</div>
      ) : (
        <div className="h-5" />
      )}
    </div>
  )
);

export default Input;
