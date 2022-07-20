import { ContactsList } from '../../components/ContactsList/ContactsList';
import { AddContactsForm } from '../../components/AddContactsForm/AddContactsForm.';
import { Filter } from '../../components/Form/FormInputs/Filter';

export const Contacts = () => {
  return (
    <>
      <AddContactsForm />
      <Filter />
      <ContactsList />
    </>
  );
};
