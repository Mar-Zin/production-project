import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamycModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Страница профиля')}
            </div>
        </DynamicModuleLoader>

    );
});

export default ProfilePage;
