import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.OUTLINE}
                type="button"
                onClick={onToggleModal}
            >
                {t('Enter')}
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onToggleModal}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium corporis eveniet qui quos sit!
                Consequatur quaerat repudiandae rerum ut voluptas!
            </Modal>
        </div>
    );
};
