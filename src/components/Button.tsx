/* eslint-disable no-nested-ternary */
import { tint, transparentize } from 'polished';
import styled, { css } from 'styled-components';

export type Variant = 'text' | 'outlined' | 'contained';

export type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fontSize?: number;
  bgColor?: string;
  bgImage?: string;
  color?: string;
  borderColor?: string;
  borderWidth?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  maxWidth?: number;
  minWidth?: number;
  maxHeight?: number;
  minHeight?: number;
  margin?: [number, number, number, number];
  children?: any;
  noFocus?: boolean;
  align?: string;
  wrapText?: boolean;
  type?: 'submit' | 'button';
  textTransform?:
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'none'
    | 'full-width'
    | 'full-size-kana';
}

const Button = styled.button.attrs(({ type = 'button' }: ButtonProps) => ({
  type,
}))`
  ${({
    size = 'medium',
    fontSize,
    variant = 'contained',
    bgColor = 'transparent',
    borderColor,
    borderWidth = '1px',
    bgImage = 'none',
    color = '#ffffff',
    fullWidth = false,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    margin = [0, 0, 0, 0],
    noFocus = false,
    align = 'center',
    wrapText = false,
    textTransform = 'uppercase',
  }: ButtonProps) => css`
    border: none;
    outline: none;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
    background-color: transparent;
    box-sizing: border-box;
    text-align: center;
    z-index: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${bgColor};
    ${(variant === 'text' || variant === 'outlined') &&
    css`
      background-color: transparent;
    `}
    background-image: ${bgImage};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: ${size === 'small' ? 8 : size === 'large' ? 12 : 10}px
      ${size === 'small' ? 12 : size === 'large' ? 18 : 15}px;
    margin: ${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px;
    transition: 400ms all ease;
    border: ${borderWidth} solid
      ${variant === 'outlined' ? color : 'transparent'};
    align-self: ${align};
    color: ${color};
    width: ${fullWidth ? '100%' : 'auto'};
    border-color: ${borderColor || color};
    min-width: ${minWidth ? `${minWidth}px` : 'initial'};
    max-width: ${maxWidth ? `${maxWidth}px` : 'none'};
    min-height: ${minHeight ? `${minHeight}px` : 'initial'};
    max-height: ${maxHeight ? `${maxHeight}px` : 'none'};
    box-shadow: rgba(0, 0, 0, 0.15) 2px 1px 10px 1px;
    font-size: ${fontSize ||
    (size === 'small' ? 12 : size === 'large' ? 20 : 16)}px;
    font-family: inherit;
    font-weight: bolder;
    text-transform: ${textTransform};
    ${wrapText &&
    css`
      white-space: break-spaces;
    `}

    &:hover {
      opacity: 0.75;
      ${variant === 'outlined' &&
      css`
        background-color: ${transparentize(0.9, tint(0.9, bgColor))};
      `}
    }

    &:active {
      opacity: 0.85;
    }

    &:disabled {
      cursor: auto;
    }

    &:disabled,
    &:disabled:hover {
      opacity: 0.5;
    }

    ${!noFocus &&
    css`
      &:focus {
        opacity: 0.7;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      }
    `}
  `}
`;

export default Button;
