import { useGetContactsQuery } from '../../store/contacts/contactsSlice';
import { getVisibleContacts } from '../../store/contacts/constactsSelectors';
import { useSelector } from 'react-redux';
import { ContactItem } from './ContactsItem/ContactItem';
import { NoContactsWarn } from '../../Pages/Contacts/Contacts.styled';
import { Contacts } from './ContactList.styled';
import { Filter } from '../Form/FormInputs/Filter';
import { getFilter } from '../../store/filter/filtersSelectors';

export const ContactsList = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const visibleContacts = useSelector(state =>
    getVisibleContacts(state, contacts)
  );

  const filter = useSelector(getFilter);

  return (
    <>
      {!!contacts.length ? (
        <Filter />
      ) : (
        <NoContactsWarn>There is no any contacts yet</NoContactsWarn>
      )}
      {!!visibleContacts?.length || !filter ? (
        <Contacts>
          <>
            {visibleContacts.map(({ name, number, id }) => (
              <ContactItem name={name} phone={number} id={id} key={id} />
            ))}
          </>
        </Contacts>
      ) : (
        <NoContactsWarn>There is no contacts with "{filter}"</NoContactsWarn>
      )}
    </>
  );
};
