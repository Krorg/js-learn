import { Page } from 'widgets/Page/Page';
import { useTranslation } from 'react-i18next';

const AdminPanelPage = () => {
    const { t } = useTranslation();

    return <Page>{t('Панель администратора')}</Page>;
};

export default AdminPanelPage;
