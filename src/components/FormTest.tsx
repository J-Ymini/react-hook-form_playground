import React, { useState } from 'react';
import '../App.css';
import { FormProvider, useForm } from 'react-hook-form';
import Input from './Input';
import Select from './Select';
import DevToolsProvider from './DevToolsProvider';
import { Modal } from 'antd';

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
};

const FormTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<FormValues>({ mode: 'all' });

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <DevToolsProvider control={form.control}>
        <form
          className="flex flex-col  text-black"
          onSubmit={form.handleSubmit(() => {
            handleModal();
          })}
        >
          <Input
            label="First name"
            error={form.formState.errors.firstName}
            {...form.register('firstName', { required: 'This is required' })}
          />
          <Input
            label="Last name"
            error={form.formState.errors.lastName}
            {...form.register('lastName', { required: 'This is required' })}
          />
          <Input
            label="Age"
            type="number"
            error={form.formState.errors.age}
            {...form.register('age', {
              required: 'This is required',
              valueAsNumber: true,
            })}
          />
          <Select
            label="Gender"
            options={['male', 'female']}
            defaultValue="female"
            {...form.register('gender', { required: true })}
          />
          <button
            className="bg-blue-500 text-bold text-white rounded-lg p-3 cursor-pointer hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-500"
            disabled={!form.formState.isValid}
          >
            Submit
          </button>
        </form>
      </DevToolsProvider>
      <Modal
        title="결과"
        open={isModalOpen}
        onOk={handleModal}
        onCancel={handleModal}
      >
        {Object.entries(form.getValues())
          .map(([key, value]) => `${key}:${value}`)
          .map((list) => (
            <div>{list}</div>
          ))}
      </Modal>
    </div>
  );
};

export default FormTest;
