import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form';

const FormTest = () => {
  type FormValues = {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
  };
  const {
    register,
    watch,
    handleSubmit,
    formState: {
      isValid,
      isDirty,
      dirtyFields,
      errors: {
        firstName: firstNameError,
        lastName: lastNameError,
        age: ageError,
        gender: genderError,
      },
    },
  } = useForm<FormValues>({ mode: 'all' });
  return (
    <div>
      <form
        className="flex flex-col  text-black"
        onSubmit={handleSubmit(console.log)}
      >
        <label className="text-white text-left text-bold" htmlFor="FirstName">
          First name
        </label>
        <input
          className="mb-4 p-3 rounded-lg"
          placeholder="FirstName"
          id="FirstName"
          {...register('firstName', { required: 'This is required' })}
        />
        {firstNameError && (
          <div className="text-red-500">{firstNameError.message}</div>
        )}
        <label className="text-white text-left text-bold" htmlFor="LastName">
          LastName
        </label>
        <input
          className="mb-4 p-3 rounded-lg"
          placeholder="LastName"
          id="LastName"
          {...register('lastName', {
            required: 'This is required',
            maxLength: {
              value: 4,
              message: 'You exceeded the maximum value',
            },
          })}
        />
        {lastNameError && (
          <div className="text-red-500">{lastNameError.message}</div>
        )}
        <label className="text-white text-left text-bold" htmlFor="Age">
          Age
        </label>
        <input
          type="number"
          className="mb-4 p-3 rounded-lg"
          placeholder="Age"
          id="Age"
          {...register('age', {
            required: true,
            valueAsNumber: true,
          })}
        />
        <select
          className="p-3 rounded-lg mb-4"
          id="Gender"
          {...register('gender', { required: true })}
        >
          <option>male</option>
          <option>female</option>
        </select>
        <button
          className="bg-blue-500 text-bold text-white rounded-lg p-3 cursor-pointer hover:bg-blue-600 active:bg-blue-700"
          disabled={!isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormTest;
