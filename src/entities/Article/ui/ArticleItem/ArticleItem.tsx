import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Article, ArticleBlockText, ArticleView } from '../../model/types/article';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';
import cls from './ArticleItem.module.scss';

interface ArticleItemProps {
    className?: string;
    articleItem: Article;
    view: ArticleView;
}

export const ArticleItem = memo((props: ArticleItemProps) => {
    const {
        className,
        view,
        articleItem,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const typesElement = (
        <Text
            // @ts-ignore
            text={String(articleItem.type.join(', '))}
            className={cls.types}
        />
    );

    const viewsElement = (
        <div className={cls.viewsElements}>
            <Text
                text={String(articleItem.views)}
                className={cls.views}
            />
            <Icon SvgComponent={EyeIcon} />
        </div>
    );

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + articleItem.id);
    }, [articleItem.id, navigate]);

    if (view === ArticleView.BIG) {
        const onlyTextBlock = articleItem.blocks.find(
            (block) => block.type === 'TEXT',
        ) as ArticleBlockText;

        return (
            <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={articleItem.user.avatar}
                        />
                        <Text
                            text={articleItem.user.username}
                            className={cls.username}
                        />
                        <Text
                            text={articleItem.createAt}
                            className={cls.date}
                        />
                    </div>
                    <Text
                        title={articleItem.title}
                        className={cls.title}
                    />
                    {typesElement}
                    <img
                        className={cls.image}
                        src={articleItem.img}
                        alt={articleItem.title}
                    />
                    {onlyTextBlock && (
                        <ArticleBlockTextComponent
                            block={onlyTextBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <Button
                            onClick={onOpenArticle}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Читать далее')}
                        </Button>
                        {viewsElement}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
            <Card
                className={cls.card}
                onClick={onOpenArticle}
            >
                <div className={cls.imageWrapper}>
                    <img
                        className={cls.image}
                        src={articleItem.img}
                        alt={articleItem.title}
                    />
                    <Text
                        text={articleItem.createAt}
                        className={cls.createdTime}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    {typesElement}
                    {viewsElement}
                </div>
                <Text
                    text={articleItem.title}
                    className={cls.title}
                />
            </Card>
        </div>
    );
});
