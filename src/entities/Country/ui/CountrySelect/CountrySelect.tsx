import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
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
        <Select
            className={classNames('', {}, [className])}
            label={t('Страна')}
            options={optionsList}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
