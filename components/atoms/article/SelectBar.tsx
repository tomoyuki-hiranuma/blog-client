import React, { VFC } from 'react';
import { Select } from '@chakra-ui/react';

interface Props {
  selects: {
    value: string;
    name: string;
  }[];
}

export const SelectBar: VFC<Props> = ({ selects }) => {
  return(
    <>
      <Select w={`160px`}>
        {selects.map((select) => (
          <option value={select.value} key={select.value}>{select.name}</option>
        ))}
      </Select>
    </>
  );
};