import './Sidebar.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";

interface ISidebarProps {
  className?: string;
}

const Sidebar = ({className}: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation();

  const onToggle = () => setCollapsed(!collapsed);

  return (
    <div className={classNames('sidebar', {['collapsed']: collapsed}, [className])}>
      <button
        onClick={onToggle}
        type="button"
      >
        {t(`ToggleButton`)}
      </button>

      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};

export default Sidebar;