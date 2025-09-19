import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItem {
    item: SidebarItemType;
    collapsed: boolean;
}

const SidebarItem = memo((props: SidebarItem) => {
    const { item, collapsed } = props;

    return (
        <AppLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {item.text}
            </span>
        </AppLink>
    );
});

export default SidebarItem;
