import { FC } from 'react';
import styled, { css } from 'styled-components';

import IconName from '../types/IconName';

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Item = styled.li<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.3rem;
  margin: 0.5rem;
  width: 4rem;
  height: 2rem;
  border: 0.2rem transparent solid;
  &:hover {
    opacity: 0.8;
    border: 0.2rem rgba(0, 0, 0, 0.2) solid;
  }
  transition: ease 150ms all;
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 0.2rem rgba(0, 0, 0, 0.3) solid;
    `}
`;

interface IconPickerProps {
  icons: IconName[];
  selected: IconName | null;
  onSelect: (color: IconName) => void;
}

const IconPicker: FC<IconPickerProps> = ({
  icons: colors,
  selected,
  onSelect,
}) => (
  <List>
    {colors.map((i) => (
      <Item onClick={() => onSelect(i)} isSelected={selected === i}>
        {i}
      </Item>
    ))}
  </List>
);

export default IconPicker;
