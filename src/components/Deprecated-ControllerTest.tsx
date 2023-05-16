import { Button, Input, Space } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormType = {
  id: string;
  password: string;
};

const schema = yup.object().shape({
  id: yup.string().required('this is required(id)').min(3, 'min 3 char'),
  password: yup
    .string()
    .required('this is required(password)')
    .max(5, 'max 5 char'),
});

const ControllerTest = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormType>({ mode: 'all', resolver: yupResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Space direction="vertical">
        <div>
          <Controller
            name="id"
            control={control}
            render={({ field }) => (
              <Input size="large" placeholder="ID" {...field} />
            )}
          />
          <div className="text-red-500">{errors.id && errors.id.message}</div>
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password size="large" placeholder="PASSWORD" {...field} />
            )}
          />
          <div className="text-red-500">
            {errors.password && errors.password.message}
          </div>
        </div>
        <Button
          disabled={!isValid}
          type="primary"
          className="bg-blue-500 text-white w-full disabled:bg-gray-500"
          htmlType="submit"
        >
          Submit
        </Button>
      </Space>
    </form>
  );
};

export default ControllerTest;
