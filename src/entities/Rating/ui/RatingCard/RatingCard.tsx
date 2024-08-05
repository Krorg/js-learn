import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import {
    Button,
    ButtonRadius,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

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
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <Card className={className} max>
            <VStack align="center" gap="8" max>
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="8" justify="end">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                radius={ButtonRadius.ALL}
                                onClick={onCancelHandler}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                radius={ButtonRadius.ALL}
                                onClick={acceptHandler}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={onCancelHandler}>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            size={ButtonSize.L}
                            radius={ButtonRadius.ALL}
                            onClick={acceptHandler}
                            fullWidth
                        >
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
