import { useForm } from 'react-hook-form';
import { Name } from '../../components/Form/FormInputs/Name';
import { Email } from '../../components/Form/FormInputs/Email';
import { Password } from '../../components/Form/FormInputs/Password';
import { FormWrapper } from '../../components/Form/FormWrapper';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/user/userActions';
import { OnLoadAnimation } from '../../components/Animation/OnLoadAnimation';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => dispatch(signUp(data));

  return (
    <OnLoadAnimation>
      <FormWrapper handleSubmit={handleSubmit(onSubmit)}>
        <Name register={register} errorMessage={errors.name?.message} />
        <Email register={register} errorMessage={errors.email?.message} />
        <Password register={register} errorMessage={errors.password?.message} />
      </FormWrapper>
    </OnLoadAnimation>
  );
};
