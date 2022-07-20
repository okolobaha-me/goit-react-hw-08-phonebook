import { getFilter } from '../filter/filtersSelectors';

export const getVisibleContacts = (state, contacts = []) =>
  contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(getFilter(state).toLowerCase()) ||
      number.includes(getFilter(state))
  );
