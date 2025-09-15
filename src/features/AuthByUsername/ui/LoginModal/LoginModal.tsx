import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
