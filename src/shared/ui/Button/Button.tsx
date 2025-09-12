import {ButtonHTMLAttributes, FC} from 'react';
import './Button.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
  const {className, children, theme, ...otherProps} = props;

  return (
    <button
      type={'button'}
      className={'button clear'}
      {...otherProps}
    >
      {children}
    </button>
  );
};