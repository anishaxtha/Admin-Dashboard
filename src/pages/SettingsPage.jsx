import React from "react";
import Header from "../components/common/Header";
import ProfileSection from "../components/settings/ProfileSection";
import Notifications from "../components/settings/Notifications";
import Security from "../components/settings/Security";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Settings" />
      <main className="max-w-4xl mx-16 py-6 px-4 lg:px-8">
        <ProfileSection />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default SettingsPage;
