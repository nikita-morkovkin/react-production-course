import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleBlockImage } from '../../model/types/article';
import cls from './ArticleBlockImageComponent.module.scss';

interface ArticleBlockImageComponentProps {
    className?: string;
    block: ArticleBlockImage;
}

export const ArticleBlockImageComponent = (props: ArticleBlockImageComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleBlockImageComponent, {}, [className])}>
            <img
                src={block.src}
                className={cls.img}
                alt=""
            />

            {block.title && (
                <Text
                    text={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
};
