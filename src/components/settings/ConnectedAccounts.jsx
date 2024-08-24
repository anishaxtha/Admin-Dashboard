import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { IoIosHelpCircleOutline } from "react-icons/io";

const ConnectedAccounts = () => {
  const [connectedAccount, setConnectedAccount] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "assets/images/google.png",
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: "assets/images/facebook.png",
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: "assets/images/twitter.png",
    },
  ]);

  const handleClick = (accountId) => {
    setConnectedAccount(
      connectedAccount.map((acc) => {
        if (acc.id === accountId) {
          return {
            ...acc,
            connected: !acc.connected,
          };
        }
        return acc;
      })
    );
  };
  return (
    <SettingSection icon={IoIosHelpCircleOutline} title={"Connected Accounts"}>
      {connectedAccount.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3"
        >
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt="logo"
              className="size-6 rounded-full mr-2 object-cover"
            />
            <span>{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            } transition duration-200`}
            onClick={() => handleClick(account.id)}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
    </SettingSection>
  );
};

export default ConnectedAccounts;
