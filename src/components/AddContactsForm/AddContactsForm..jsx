import { OnLoadAnimation } from '../Animation/OnLoadAnimation';
import { FormWrapper } from '../Form/FormWrapper';
import { useForm } from 'react-hook-form';
import { Name } from '../Form/FormInputs/Name';
import React from 'react';
import { Number } from '../Form/FormInputs/Number';
import { useAddContactMutation } from '../../store/contacts/contactsSlice';

export const AddContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [addContact] = useAddContactMutation();

  // const dispatch = useDispatch();

  const onSubmit = data => {
    addContact(data);
    reset();
  };

  return (
    <OnLoadAnimation>
      <FormWrapper handleSubmit={handleSubmit(onSubmit)} buttonText={'Add'}>
        <Name register={register} errorMessage={errors.name?.message} />
        <Number register={register} errorMessage={errors.number?.message} />
      </FormWrapper>
    </OnLoadAnimation>
  );
};
