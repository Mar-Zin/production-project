import { LangSwitcher } from 'features/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { memo, useMemo, useState } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { Button, ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const ItemsList = useMemo(() => (
        SidebarItemsList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        ))
    ), [collapsed]);

    const mods: Mods = {
        [cls.collapsed]: collapsed,
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, mods, [
                className,
            ])}
        >
            <div className={cls.items}>
                {ItemsList}
            </div>
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
});
