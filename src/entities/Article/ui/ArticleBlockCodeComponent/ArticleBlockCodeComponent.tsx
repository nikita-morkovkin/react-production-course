import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { ArticleBlockCode } from '../../model/types/article';
import cls from './ArticleBlockCodeComponent.module.scss';

interface ArticleBlockCodeComponentProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleBlockCodeComponent = memo((props: ArticleBlockCodeComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleBlockCodeComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
