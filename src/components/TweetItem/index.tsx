import React from 'react';
import { Tweet } from '@/utils/type';
import Link from 'next/link';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface Props {
  tweet: Tweet;
  isOwner: boolean;
  onDelete: (id: number) => void;
}

export const TweetItem = (props: Props) => {
  return (
    <div className="mb-4 flex justify-center ">
      <div className="w-80 flex-col border-x-0 border-t-0 border-solid border-slate-200 bg-slate-200 px-4">
        <div className="flex  items-center justify-between">
          <Link href={'/user/' + props.tweet.userId} className="no-underline">
            <div className="mb-4 mt-4 font-sans text-sm font-md text-slate-500">
              {props.tweet.userName}
            </div>
          </Link>
          {props.isOwner && (
            <div className="space-x-4">
              <Link href={'/edit/' + props.tweet.id} className="no-underline">
                <EditOutlined className="cursor-pointer text-slate-500" />
              </Link>
              <DeleteOutlined
                className="cursor-pointer text-slate-500"
                onClick={() => {
                  props.onDelete(props.tweet.id);
                }}
              />
            </div>
          )}
        </div>
        <div className="mb-4 items-end font-sans text-lg text-slate-700">
          {props.tweet.text}
        </div>
        <Link href={'/status/' + props.tweet.id} className="no-underline">
          <div className="mb-4 items-end font-sans text-xs text-slate-400">
            {new Date(props.tweet.time).toLocaleString()}
          </div>
        </Link>
      </div>
    </div>
  );
};
