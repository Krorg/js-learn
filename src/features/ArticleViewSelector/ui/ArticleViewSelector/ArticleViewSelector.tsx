import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import GridIcon from '@/shared/assets/icons/gridNew.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { ToggleFeature } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: GridIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView);
        };
    };

    return (
        <ToggleFeature
            feature="isAppRedesigned"
            on={(
                <Card
                    border="round"
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className]
                    )}
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                key={viewType.view}
                                Svg={viewType.icon}
                                clickable
                                onClick={onClick(viewType.view)}
                                className={classNames('', {
                                    [cls.notSelected]: viewType.view !== view,
                                })}
                            />
                        ))}
                    </HStack>
                </Card>
            )}
            off={(
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType, index) => (
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                            className={cls.btn}
                            key={viewType.view}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                width={24}
                                height={24}
                                className={classNames('', {
                                    [cls.Selected]: viewType.view === view,
                                })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            )}
        />
    );
});
