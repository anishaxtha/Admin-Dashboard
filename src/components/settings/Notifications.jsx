import React, { useState } from "react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { BiBell } from "react-icons/bi";

const Notifications = () => {
  const [notification, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });
  return (
    <SettingSection icon={BiBell} title={"Notifications"}>
      <ToggleSwitch
        label={"Push Notifications"}
        isOn={notification.push}
        onToggle={() =>
          setNotifications({ ...notification, push: !notification.push })
        }
      />
      <ToggleSwitch
        label={"Email Notifications"}
        isOn={notification.email}
        onToggle={() =>
          setNotifications({ ...notification, email: !notification.email })
        }
      />
      <ToggleSwitch
        label={"SMS Notifications"}
        isOn={notification.sms}
        onToggle={() =>
          setNotifications({ ...notification, sms: !notification.sms })
        }
      />
    </SettingSection>
  );
};

export default Notifications;
