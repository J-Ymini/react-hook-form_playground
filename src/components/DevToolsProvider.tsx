import type { ReactNode } from 'react';
import { DevTool } from '@hookform/devtools';
import { Control, FieldValues } from 'react-hook-form';

type DevToolsProviderProps<T extends FieldValues> = {
  children: ReactNode;
  control: Control<T, any>;
};

const DevToolsProvider = <T extends FieldValues>({
  children,
  control,
}: DevToolsProviderProps<T>) => {
  return (
    <>
      {children}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </>
  );
};

export default DevToolsProvider;
