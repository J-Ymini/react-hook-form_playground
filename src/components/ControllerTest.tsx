import { Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import DevToolsProvider from './DevToolsProvider';

const ControllerTest = () => {
  const { handleSubmit, watch, control } = useForm();

  console.log(watch());

  return (
    <DevToolsProvider control={control}>
      <form
        onSubmit={handleSubmit(({ text }) => {
          console.log(text);
        })}
      >
        <Controller
          name="text"
          control={control}
          render={({ field, fieldState, formState }) => (
            <Input {...field} {...fieldState} {...formState} />
          )}
        />
      </form>
    </DevToolsProvider>
  );
};

export default ControllerTest;
