import { forwardRef } from 'react';
import type { SelectHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

type SelectProps = {
  label?: string;
  htmlFor?: string;
  error?: FieldError;
  options: (string | number)[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, htmlFor, error, options, ...props }, ref) => (
    <div className="flex flex-col">
      {label && (
        <label
          className="text-white text-left text-bold"
          htmlFor={label ?? htmlFor}
        >
          {label}
        </label>
      )}
      <select
        className="p-3 rounded-lg mb-4"
        id={label ?? htmlFor}
        ref={ref}
        {...props}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
);

export default Select;
