import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import Input from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState<string>('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <h1>{value}</h1>

            <Counter />
            <Input
                onChange={onChange}
                value={value}
                placeholder={t('White-text')}
            />
        </div>
    );
};

// @ts-ignore
export default MainPage;
