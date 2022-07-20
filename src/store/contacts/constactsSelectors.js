import { getFilter } from '../filter/filtersSelectors';

export const getVisibleContacts = (state, contacts = []) =>
  contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(getFilter(state).toLowerCase()) ||
      phone.includes(getFilter(state))
  );
