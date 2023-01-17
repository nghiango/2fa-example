import React, { useState } from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import TokenIcon from '@assets/icons/token.svg';
import TokenGrayIcon from '@assets/icons/token-gray.svg';
import SettingIcon from '@assets/icons/setting.svg';
import SettingGrayIcon from '@assets/icons/setting-gray.svg';

enum FooterTab {
  TOKEN = 'token',
  SETTING = 'setting'
}

export const Footer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<FooterTab>(FooterTab.TOKEN);
  const navigateToSetting = () => {
    setActiveTab(FooterTab.SETTING);
    navigate("/setting");
  };
  const navigateToHome = () => {
    setActiveTab(FooterTab.TOKEN);
    navigate("/");
  };

  const isActive = (name: FooterTab) => {
    return activeTab === name;
  };
  return <div className="footer">
    <div onClick={navigateToHome} className="footer__icon-wrapper">
      <img
        className="footer__icon"
        src={isActive(FooterTab.TOKEN) ? TokenIcon : TokenGrayIcon}
        alt="token-icon"
      />

    </div>
    <div onClick={navigateToSetting} className="footer__icon-wrapper">
      <img
        className="footer__icon"
        src={isActive(FooterTab.SETTING) ? SettingIcon : SettingGrayIcon}
        alt="setting-icon"
      />

    </div>

  </div>;
};