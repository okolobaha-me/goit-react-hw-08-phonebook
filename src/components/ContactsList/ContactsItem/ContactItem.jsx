import { DeleteButton, Item, Name } from './ContactItem.styled';
import { Box } from '@chakra-ui/react';
import { useDeleteContactMutation } from '../../../store/contacts/contactsSlice';
import { OnDeleteAnimation } from '../../Animation/OnDeleteAnimation';

export const ContactItem = ({ name, phone, id }) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactMutation();

  const handleDelete = () => {
    deleteContacts(id);
  };

  return (
    <OnDeleteAnimation>
      <Item>
        <Box>
          <Name>{name}</Name> <p>{phone}</p>
        </Box>
        <Box>
          <DeleteButton isDisabled={isDeleting} onclick={handleDelete} />
        </Box>
      </Item>
    </OnDeleteAnimation>
  );
};
