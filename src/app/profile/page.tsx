"use client";

import React from 'react';
import ProfileHeader from '@/components/specific/profile/ProfileHeader';
import ProfileStatistics from '@/components/specific/profile/ProfileStatisticsAndAchievements';
import ProfileRecentActivity from '@/components/specific/profile/ProfileRecentActivity';
import LogoutButton from '@/components/shared/LogoutButton';

const Profile: React.FC = () => {
  
  // Mock user data - in a real app, this would come from authentication/API
  const user: UserModel = {
    id: "123434t354423434",
    email: "alexjohnson@gmail.com",
    username: "alexj",
    level: 24,
    colorHex: "#FF5733",
    joinDate: "May 2024",
    stats: null!
  };
  
  return (
    <div>
      
      <div className="flex-1 container max-w-4xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">My Profile</h1>
        </div>
        
        <div className='flex flex-col gap-6'>
          <ProfileHeader user={user}></ProfileHeader>
          
          <ProfileStatistics user={user}></ProfileStatistics>

          <ProfileRecentActivity user={user}></ProfileRecentActivity>

          <LogoutButton></LogoutButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;