import styled, { css } from 'styled-components';

import ColorName from '../types/ColorName';

const BaseLink = styled.a`
  display: inline;
  text-decoration: none;
  box-sizing: border-box;
  line-height: 1.15;
  text-decoration: none;
`;

export type Variant = 'text' | 'outlined' | 'contained';

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  color?: string;
  maxWidth?: number;
  minWidth?: number;
  children: string;
  align?:
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'justify-all'
    | 'start'
    | 'end'
    | 'match-parent'
    | 'inherit'
    | 'initial'
    | 'unset';
  fontSize?:
    | number
    | 'xx-small'
    | 'x-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | 'xx-large'
    | 'xxx-large'
    | 'smaller'
    | 'larger'
    | 'inherit'
    | 'initial'
    | 'unset';
  fontStyle?: 'normal' | 'italic' | 'oblique' | 'inherit' | 'initial' | 'unset';
  fontFamily?: string;
  fontWeight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'normal'
    | 'bold'
    | 'lighter'
    | 'bolder'
    | 'inherit'
    | 'initial'
    | 'unset';
  textTransform?:
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'none'
    | 'full-width'
    | 'full-size-kana'
    | 'inherit'
    | 'initial'
    | 'unset';
  padding?: [number, number, number, number];
  margin?: [number, number, number, number];
  selectable?: boolean;
  underline?: boolean;
  accent?: string;
}

const Link = styled(BaseLink)`
  ${({
    color = ColorName.MAGENTA,
    accent = '#FFFFFF',
    align = 'left',
    fontSize = 'inherit',
    fontFamily = 'inherit',
    fontWeight = 'normal',
    fontStyle = 'inherit',
    textTransform = 'none',
    selectable = true,
    padding = [0, 0, 0, 0],
    margin = [0, 0, 0, 0],
    underline = true,
  }: LinkProps) => css`
    padding: ${padding[0]}rem ${padding[1]}rem ${padding[2]}rem ${padding[3]}rem;
    margin: ${margin[0]}rem ${margin[1]}rem ${margin[2]}rem ${margin[3]}rem;
    color: ${color};
    font-size: ${typeof fontSize === 'number' ? `${fontSize}rem` : fontSize};
    font-style: ${fontStyle};
    text-align: ${align};
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
    user-select: ${selectable ? 'auto' : 'none'};
    border-bottom: ${underline ? `1px solid ${color}` : 'none'};
    &:hover {
      color: ${accent};
      border-bottom: ${underline ? `1px solid ${accent}` : 'none'};
      background-color: ${color};
    }
  `}
`;

export default Link;
