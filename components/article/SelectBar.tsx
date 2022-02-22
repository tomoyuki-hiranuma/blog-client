import React, { VFC, ChangeEventHandler } from 'react';
import { Select } from '@chakra-ui/react';

interface Select {
  value: string;
  name: string;
}

interface Props {
  selects: Select[],
  handleChange: ChangeEventHandler<HTMLElement>
}

export const SelectBar: VFC<Props> = ({ selects, handleChange }) => {
  return(
    <>
      <Select w={`160px`} onChange={handleChange}>
        {selects.map((select) => (
          <option value={select.value} key={select.value}>{select.name}</option>
        ))}
      </Select>
    </>
  );
};