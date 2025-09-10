import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
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
      className={classNames('button', {}, [className, theme])}
      {...otherProps}
    >
      {children}
    </button>
  );
};