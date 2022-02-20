import React, { VFC, ChangeEvent } from 'react';
import { Select } from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks';
import { sortContents } from '../../actions/postActions';

interface Select {
  value: string;
  name: string;
}

interface Props {
  selects: Select[],
}

export const SelectBar: VFC<Props> = ({ selects }) => {
  const dispatch = useAppDispatch();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    dispatch(sortContents(order));
  };
  
  return(
    <>
      <Select w={`160px`} onChange={handleSelectChange}>
        {selects.map((select) => (
          <option value={select.value} key={select.value}>{select.name}</option>
        ))}
      </Select>
    </>
  );
};