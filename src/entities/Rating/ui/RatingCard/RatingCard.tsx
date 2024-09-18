import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputeDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Button as ButtonDeprecated,
    ButtonRadius,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeature } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { StarRating } from '@/shared/ui/redesigned/StarRating';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        hasFeedback,
        feedbackTitle,
        onAccept,
        onCancel,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept]
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const onCancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [starsCount, onCancel]);

    const modalContent = (
        <ToggleFeature
            feature="isAppRedesigned"
            on={(
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            )}
            off={(
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputeDeprecated
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                    />
                </>
            )}
        />
    );

    const content = (
        <>
            <VStack align="center" gap="8" max>
                <ToggleFeature
                    feature="isAppRedesigned"
                    on={(
                        <Text
                            title={starsCount ? t('Спасибо за оценку!') : title}
                        />
                    )}
                    off={(
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за оценку!') : title}
                        />
                    )}
                />
                <ToggleFeature
                    feature="isAppRedesigned"
                    on={(
                        <StarRating
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectStars}
                        />
                    )}
                    off={(
                        <StarRatingDeprecated
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectStars}
                        />
                    )}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <ToggleFeature
                            feature="isAppRedesigned"
                            on={(
                                <HStack max gap="8" justify="end">
                                    <Button
                                        data-testid="RatingCard.Close"
                                        onClick={onCancelHandler}
                                    >
                                        {t('Закрыть')}
                                    </Button>
                                    <Button
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandler}
                                    >
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            )}
                            off={(
                                <HStack max gap="8" justify="end">
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Close"
                                        theme={ButtonTheme.OUTLINE_RED}
                                        radius={ButtonRadius.ALL}
                                        onClick={onCancelHandler}
                                    >
                                        {t('Закрыть')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Send"
                                        theme={ButtonTheme.OUTLINE}
                                        radius={ButtonRadius.ALL}
                                        onClick={acceptHandler}
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={onCancelHandler}>
                    <VStack gap="32">
                        {modalContent}
                        <ToggleFeature
                            feature="isAppRedesigned"
                            on={(
                                <Button
                                    size="l"
                                    onClick={acceptHandler}
                                    fullWidth
                                >
                                    {t('Отправить')}
                                </Button>
                            )}
                            off={(
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE}
                                    size={ButtonSize.L}
                                    radius={ButtonRadius.ALL}
                                    onClick={acceptHandler}
                                    fullWidth
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            )}
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeature
            feature="isAppRedesigned"
            on={(
                <Card
                    data-testid="RatingCard"
                    fullHeight
                    variant="noBackground"
                    padding="24"
                    className={className}
                    max
                >
                    {content}
                </Card>
            )}
            off={(
                <CardDeprecated
                    data-testid="RatingCard"
                    className={className}
                    max
                >
                    {content}
                </CardDeprecated>
            )}
        />
    );
});
