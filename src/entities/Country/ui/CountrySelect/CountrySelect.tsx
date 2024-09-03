import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const optionsList = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    {
        value: Country.Kazakhstan,
        content: Country.Kazakhstan,
    },
    { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const { className, value, readonly, onChange } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange]
    );

    return (
        <ListBox
            className={className}
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Укажите страну')}
            items={optionsList}
            label={t('Страна')}
            readonly={readonly}
            direction="bottom_right"
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Страна')}
    //         options={optionsList}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});
