import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    SvgComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
    width?: number | string;
    height?: number | string;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        SvgComponent,
        width = 20,
        height = 20,
    } = props;

    return (
        <SvgComponent
            width={width}
            height={height}
            className={classNames(cls.Icon, {}, [className])}
        />
    );
});
