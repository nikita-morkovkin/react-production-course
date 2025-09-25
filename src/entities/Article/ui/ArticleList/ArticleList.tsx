import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleItemSkeleton } from 'entities/Article/ui/ArticleItem/ArticleItemSkeleton';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === 'SMALL' ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticleItemSkeleton
            className={cls.card}
            key={index}
            view={view}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.BIG,
        isLoading,
    } = props;

    const renderArticle = (article: Article) => {
        return (
            <ArticleItem
                className={cls.card}
                articleItem={article}
                view={view}
                key={article.id}
            />
        );
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map((renderArticle))
                : null}
        </div>
    );
});
