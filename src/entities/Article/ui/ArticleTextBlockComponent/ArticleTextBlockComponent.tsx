import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => {
        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeature
                        feature="isAppRedesigned"
                        on={<Text title={block.title} className={cls.title} />}
                        off={(
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        )}
                    />
                )}
                {block.paragraphs.map((paragraph) => (
                    <ToggleFeature
                        feature="isAppRedesigned"
                        on={(
                            <Text
                                text={paragraph}
                                className={cls.paragraph}
                                key={block.id}
                            />
                        )}
                        off={(
                            <TextDeprecated
                                key={block.id}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        )}
                    />
                ))}
            </div>
        );
    }
);
