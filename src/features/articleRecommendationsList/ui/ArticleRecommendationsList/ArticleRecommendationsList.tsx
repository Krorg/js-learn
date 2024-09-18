import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecomendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecomendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="16"
                className={classNames('', {}, [className])}
            >
                <ToggleFeature
                    feature="isAppRedesigned"
                    on={<Text title={t('Рекомендуем')} size="l" />}
                    off={(
                        <TextDeprecated
                            title={t('Рекомендуем')}
                            size={TextSize.L}
                        />
                    )}
                />

                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    }
);
