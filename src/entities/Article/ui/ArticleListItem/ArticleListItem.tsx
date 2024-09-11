import { HTMLAttributeAnchorTarget, memo } from 'react';

import { Article } from '../../model/types/article';
import {
    ArticleView,
} from '../../model/consts/articleConsts';
import { ToggleFeature } from '@/shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    return (
        <ToggleFeature
            feature="isAppRedesigned"
            on={<ArticleListItemRedesigned {...props} />}
            off={<ArticleListItemDeprecated {...props} />}
        />
    );
});
