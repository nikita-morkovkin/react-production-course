import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import './AppLink.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme
}

const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames('app-link', {}, [className, theme])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;