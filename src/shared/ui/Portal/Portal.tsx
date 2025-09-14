import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    documentPlace?: HTMLElement;
}

const Portal = (props: PortalProps) => {
    const {
        children,
        documentPlace = document.body,
    } = props;

    return createPortal(children, documentPlace);
};

export default Portal;
