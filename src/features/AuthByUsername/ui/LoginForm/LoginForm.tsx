import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Username')}
                autoFocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Password')}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                radius={ButtonRadius.ALL}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
