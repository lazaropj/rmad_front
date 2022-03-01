import React, { ChangeEvent } from 'react';
import merge from 'lodash.merge';
import {
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import masker from 'vanilla-masker';

import { Error } from 'src/assets/images/svg/error';
import { Warn } from 'src/assets/images/svg/warn';

import * as Style from './styles';

type Controller = Omit<UseControllerProps, 'name' | 'control'>;
interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  controller?: Controller;
  placeholder: string;
  mask?: string;
}

export const Input: React.FC<Props> = ({ name, controller, mask, ...rest }) => {
  const defaultConfigs = {
    defaultValue: '',
    rules: {
      required: 'Você deve preencher este campo',
    },
  } as Controller;

  const { field, fieldState } = useController({
    name,
    ...merge(defaultConfigs, controller),
  });

  const { trigger, resetField } = useFormContext();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value;

    const customEvent = merge(event, {
      target: {
        value: mask ? masker.toPattern(eventValue, mask) : eventValue,
      },
    });

    field.onChange(customEvent);
  };

  const onBlur = () => {
    trigger(name);

    field.onBlur();
  };

  const onFocus = () => {
    if (field.value.length === 0) {
      resetField(name);
    }
  };

  return (
    <Style.Container
      error={!!fieldState.error?.message}
      warning={fieldState.error?.type === 'required'}
    >
      <input
        id={rest.placeholder}
        type="text"
        {...field}
        {...rest}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
      />
      <label htmlFor={rest.placeholder}>
        {fieldState.error?.message || rest.placeholder}
      </label>
      {fieldState.error?.message &&
        (fieldState.error.type === 'required' ? (
          <div>
            <Warn color="orange" />
          </div>
        ) : (
          <div>
            <Error color="red" />
          </div>
        ))}
    </Style.Container>
  );
};
