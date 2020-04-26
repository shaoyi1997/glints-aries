import * as React from 'react';
import { get } from 'lodash';

import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { Variant, Theme } from '../../Utils/StyleConfig';

export const DeprecatedThemeMap = {
  [Variant.DEFAULT]: [Theme.RED, Theme.YELLOW],
  [Variant.PRIMARY]: [Theme.RED, Theme.BLUE, Theme.BLUE_RED],
};

const renderButton: React.FunctionComponent<Props> = ({
  children,
  block,
  className,
  disabled,
  onClick,
  removeHoverEffect,
  small,
  theme,
  variant,
  ...defaultProps
}) => {
  switch (variant) {
    case Variant.PRIMARY:
      if (get(DeprecatedThemeMap, Variant.PRIMARY, []).includes(theme)) {
        console.warn(
          `Warning: Primary Button's theme prop is deprecated and will be removed in v5.`
        );
      }
      return (
        <PrimaryButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          theme={theme}
          {...defaultProps}
        >
          {children}
        </PrimaryButton>
      );
    case Variant.SECONDARY:
      return (
        <SecondaryButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          {...defaultProps}
        >
          {children}
        </SecondaryButton>
      );
    case Variant.GHOST:
      return (
        <GhostButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          {...defaultProps}
        >
          {children}
        </GhostButton>
      );
    case Variant.LINK:
      return (
        <LinkButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          {...defaultProps}
        >
          {children}
        </LinkButton>
      );
    default:
      if (get(DeprecatedThemeMap, Variant.DEFAULT, []).includes(theme)) {
        console.warn(
          `Warning: Default Button's ${theme} theme is deprecated and will be removed in v5.\nPlease use another theme instead.`
        );
      }
      return (
        <DefaultButton
          theme={theme}
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          {...defaultProps}
        >
          {children}
        </DefaultButton>
      );
  }
};

const Button: React.FunctionComponent<Props> = props => (
  <React.Fragment>{renderButton(props)}</React.Fragment>
);

export interface Props {
  children: React.ReactNode;
  block?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  removeHoverEffect?: boolean;
  small?: boolean;
  theme?: string;
  variant?: string;
  tag?: React.ElementType;
}

export default Button;
