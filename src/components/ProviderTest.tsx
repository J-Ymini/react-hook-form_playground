import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import Input from './Input';
import DevToolsProvider from './DevToolsProvider';

export type ProviderFieldValue = { parentsText: string; nestedText: string };

const ProviderTest = () => {
  const methods = useForm<ProviderFieldValue>();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Input {...methods.register('parentsText')} label="parentsText" />
        <NestedInput />
        <button
          className="bg-blue-500 text-bold text-white rounded-lg p-3 cursor-pointer hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-500"
          disabled={!methods.formState.isValid}
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default ProviderTest;

function NestedInput() {
  const { register, control } = useFormContext<ProviderFieldValue>(); // retrieve all hook methods
  return (
    <DevToolsProvider control={control}>
      <div>
        <Input {...register('nestedText')} label="nestedText" />
      </div>
    </DevToolsProvider>
  );
}
