import {ButtonHTMLAttributes, FC} from 'react';
import '/src/shared/ui/Button/Button.scss';
import {classNames} from "../../lib/classNames/classNames";

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
      className={classNames('button', {}, [className, theme])}
      {...otherProps}
    >
      {children}
    </button>
  );
};