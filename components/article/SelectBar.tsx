import React, { VFC, Dispatch, SetStateAction, ChangeEvent, ChangeEventHandler } from 'react';
import { Select } from '@chakra-ui/react';

interface Select {
  value: string;
  name: string;
}

interface Props {
  selects: Select[],
  setSelect: Dispatch<SetStateAction<Select>>;
}

export const SelectBar: VFC<Props> = ({ selects, setSelect }) => {

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(selects[Number(e.target.value)]);
  };
  
  return(
    <>
      <Select w={`160px`} onChange={handleSelectChange}>
        {selects.map((select, index) => (
          <option value={index} key={select.value}>{select.name}</option>
        ))}
      </Select>
    </>
  );
};