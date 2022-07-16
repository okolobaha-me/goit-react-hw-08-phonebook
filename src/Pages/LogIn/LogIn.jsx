import React from 'react';
import { useForm } from 'react-hook-form';
import { Password } from '../../components/Form/FormInputs/Password';
import { FormWrapper } from '../../components/Form/FormWrapper';
import { OnLoadAnimation } from '../../components/Animation/OnLoadAnimation';
import { logIn } from '../../store/user/userActions';
import { useDispatch } from 'react-redux';
import { Email } from '../../components/Form/FormInputs/Email';

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', password: '' } });

  const dispatch = useDispatch();

  const onSubmit = data => dispatch(logIn(data));

  return (
    <OnLoadAnimation>
      <FormWrapper handleSubmit={handleSubmit(onSubmit)}>
        <Email register={register} errorMessage={errors.name?.message} />
        <Password register={register} errorMessage={errors.password?.message} />
      </FormWrapper>
    </OnLoadAnimation>
  );
};
