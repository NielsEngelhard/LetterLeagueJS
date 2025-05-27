'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
  user: UserModel | null;
  isLoggedIn: boolean;
  login: (userData: UserModel) => void;
  logout: () => void;
};