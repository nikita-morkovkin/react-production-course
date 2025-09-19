import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePage {
    className?: string;
}

const ProfilePage = (props: ProfilePage) => {
    // @ts-ignore
    const reducers: ReducersList = {
        profile: profileReducer,
    };

    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>
                {t('ProfilePage')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
