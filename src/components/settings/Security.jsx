import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { FaLock } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState("false");
  return (
    <SettingSection icon={FaLock} title={"Security"}>
      <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => {
          setTwoFactor(!twoFactor);
        }}
      />

      <div className="my-4">
        <button className="bg-indigo-600  hover:bg-indigo-700  text-white font-semibold  py-2  px-4  rounded  transition  duration-200">
          Change Password
        </button>
      </div>
    </SettingSection>
  );
};

export default Security;
