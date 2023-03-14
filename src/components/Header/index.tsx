import React from 'react';
import Link from 'next/link';
import { TwitterOutlined } from '@ant-design/icons';
import { Button } from '@/components/Button';

interface Props {
  name?: string;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header = (props: Props) => {
  return (
    <header>
      <div className="wrapper flex items-center justify-between py-4 px-5 font-sans">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <TwitterOutlined className="text-3xl text-sky-500" />
          </div>
        </Link>
        <div>
          {props.name ? (
          <>
            <span className="mr-2.5 text-sm text-black">
              Welcome, <b>{props.name}</b>!
            </span>
            <Button size="small" onClick={props.onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={props.onLogin} label="Log in" />
          </>
        )}
        </div>
      </div>
    </header>
  );
};
