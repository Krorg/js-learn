import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';
import { Text } from '@/shared/ui/Text';
import { ArticlesSortField } from '../../model/consts/articleConsts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticlesSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticlesSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation('article-details');

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t]
    );

    const sortFieldOptions = useMemo<SelectOptions<ArticlesSortField>[]>(
        () => [
            {
                value: ArticlesSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticlesSortField.TITLE,
                content: t('наименованию'),
            },
            {
                value: ArticlesSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t]
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Text text="|" />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
