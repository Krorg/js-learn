import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeature } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

    const componentProps = {
        className,
        onChange: onChangeHandler,
        value,
        defaultValue: t('Укажите страну'),
        items: optionsList,
        readonly,
        direction: 'bottom_right' as const,
        label: t('Страна'),
    };

    return (
        <ToggleFeature
            feature="isAppRedesigned"
            on={<ListBox {...componentProps} />}
            off={<ListBoxDeprecated {...componentProps} />}
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
