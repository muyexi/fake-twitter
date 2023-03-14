import type { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';
import { Header } from '@/components/Header';
import { getUser, logout } from '@/utils/storage';

type LayoutProps = { children?: ReactNode };

export default function Layout({ children }: LayoutProps) {
  const { data: user } = useQuery('user', () => {
    return getUser();
  });

  const { asPath } = useRouter();

  const queryClient = useQueryClient()
  const router = useRouter();

  const onLogin = () => {
    router.push('/login');
  };

  const onLogout = () => {
    console.log("onLogout");
    logout();
    queryClient.invalidateQueries('user');
    queryClient.invalidateQueries('tweets');
  };

  return (
    <>
      {asPath !== '/login' && <Header name={user?.name} onLogin={onLogin} onLogout={onLogout}/>}
      <main>{children}</main>
    </>
  );

}