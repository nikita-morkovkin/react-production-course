import { useCallback, useMemo, useState } from 'react';

type OnMouseEnter = () => void;
type OnMouseLeave = () => void;
type UseHoverResult = [boolean, OnMouseEnter, OnMouseLeave];

export const useHover = (): UseHoverResult => {
    const [isHovered, setHovered] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setHovered(false);
    }, []);

    return useMemo(
        () => [isHovered, onMouseEnter, onMouseLeave],
        [isHovered, onMouseEnter, onMouseLeave],
    );
};
