import React from "react";
import Header from "../components/common/Header";
import ProfileSection from "../components/settings/ProfileSection";
import Notifications from "../components/settings/Notifications";

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Settings" />
      <main className="max-w-4xl mx-32 py-6 px-4 lg:px-8">
        <ProfileSection />
        <Notifications />
      </main>
    </div>
  );
};

export default SettingsPage;
