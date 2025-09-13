import './Sidebar.scss';
import {useState} from "react";
import ThemeSwitcher from "../../../ThemeSwitcher/ui/ThemeSwitcher";
import LangSwitcher from "../../../LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";

interface ISidebarProps {
  className?: string;
}

const Sidebar = ({className}: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation();

  const onToggle = () => setCollapsed(!collapsed);

  return (
    <div
      data-testid={'sidebar'}
      className={`sidebar ${className} ${collapsed ? 'collapsed' : ''}`}
    >
      <button
        onClick={onToggle}
        type="button"
      >
        {collapsed ? t('Sidebar-closed') : t('Sidebar-open')}
      </button>

      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};

export default Sidebar;