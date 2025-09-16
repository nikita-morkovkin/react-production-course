import cls from './Text.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    const mods = {
        [cls[theme]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>
                {title}
            </p>}
            {text && <p className={cls.text}>
                {text}
            </p>}
        </div>
    );
};

export default Text;
