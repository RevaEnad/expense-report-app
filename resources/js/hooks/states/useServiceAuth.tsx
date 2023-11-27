import { useState, useEffect, useMemo } from 'react';

import useServiceHttpRequest from './useServiceHttpRequest';
import {Post} from '../services/Api/index';
import { access } from 'fs';

const useServiceAuth = () => {
  const [role, setRole] = useState<string|null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string|null>(null);


  const { upload: request, loading } = Post('/auth/login', {});
  const { upload: logout, loading: isLoadingLogout } = Post('/auth/logout', {});

  const handleAuth = async (email: string, password: string) => {
    try {
      const res = await request({ data: { email, password } });
      if (res.status === 200) {
        setAccessToken(res.data.access_token);
        setRole(res.data.role);
        return res;
      }
    } catch (err: any) {
      throw err.errors;
    }
  };

  const clear = () => {
    setIsLoggedIn(false);
    setAccessToken(null);
    window.localStorage.clear();
    window.sessionStorage.clear();
  };

  const handleLogout = async () => {
    try {
      await logout();
      clear();
    } catch (err: any) {
      throw err.errors;
    }
  };

  useEffect(() => {
    if(accessToken !== null){
        window.localStorage.setItem('accessToken', String(accessToken));
        setIsLoggedIn(true);
    }

  }, [accessToken]);


  return {
    role,
    accessToken,
    loading,
    isLoggedIn,
    handleAuth,
    handleLogout,
  };
};

export default useServiceAuth;
