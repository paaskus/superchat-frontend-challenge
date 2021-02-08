import { FC } from 'react';
import styled, { css } from 'styled-components';

import ColorName from '../types/ColorName';

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Item = styled.li<{ color: string; isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ color }) => color};
  border-radius: 0.3rem;
  margin: 0.5rem;
  width: 4rem;
  height: 2rem;
  border: 0.2rem ${({ color }) => color} solid;
  &:hover {
    opacity: 0.8;
    border: 0.2rem rgba(0, 0, 0, 0.2) solid;
  }
  transition: ease 150ms all;
  ${({ isSelected }) =>
    isSelected &&
    css`
      &:after {
        content: '👍';
      }
      border: 0.2rem rgba(0, 0, 0, 0.2) solid;
    `}
`;

interface ColorPickerProps {
  colors: ColorName[];
  selected: ColorName | null;
  onSelect: (color: ColorName) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({ colors, selected, onSelect }) => (
  <List>
    {colors.map((c) => (
      <Item onClick={() => onSelect(c)} color={c} isSelected={selected === c} />
    ))}
  </List>
);

export default ColorPicker;
