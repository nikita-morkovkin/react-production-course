import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import DocumentIcon from 'shared/assets/icons/document.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: DocumentIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
];
