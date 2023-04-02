import propTypes from 'prop-types';
import { InputParamether, Title } from './FilteredItem.styled';

export const FilteredItem = ({ filter, handleChange }) => {
  return (
    <div>
      <Title>Find contacts by Name</Title>
      <InputParamether
        type="text"
        name="filter"
        placeholder="Enter filter paramether"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

FilteredItem.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
