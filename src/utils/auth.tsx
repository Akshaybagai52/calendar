// utils/auth.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useRequireAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const loggedIn:any = useRequireAuth();
    if (!loggedIn) {
      router.push('/login'); 
    }
  }, [router]);

  return ;
};
