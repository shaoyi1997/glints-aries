import * as React from 'react';
import classNames from 'classnames';
import { PrimaryContainer, PrimaryBtn } from '../../Style/General/ButtonStyle';

const PrimaryButton: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  disabled,
  block,
  small,
  tag,
  ...defaultProps
}) => (
  <PrimaryContainer
    className={classNames('aries-primarybtn', className)}
    theme={theme}
    disabled={disabled}
    block={block}
  >
    <PrimaryBtn
      className="primarybtn-content"
      theme={theme}
      disabled={disabled}
      block={block}
      small={small}
      as={(tag as React.ElementType) || 'button'}
      {...defaultProps}
    >
      {children}
    </PrimaryBtn>
  </PrimaryContainer>
);

interface Props extends React.ComponentPropsWithoutRef<typeof PrimaryBtn> {
  children: React.ReactNode;
  className: string;
  theme?: string;
  disabled?: boolean;
  block?: boolean;
  small?: boolean;
  removeHoverEffect?: boolean;
  tag?: React.ElementType;
}

export default PrimaryButton;
