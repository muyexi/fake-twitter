import React from 'react';
import { Tweet, User } from '@/utils/type';
import { TweetItem } from '@/components/TweetItem';
import { deleteTweet, getUser } from '@/utils/storage';
import { useQuery, useQueryClient } from 'react-query';

type Props = {
  tweets: Tweet[];
};

export const TweetList = (props: Props) => {
  const { data: user } = useQuery<User | null>('user', () => {
    return getUser();
  });

  const queryClient = useQueryClient();

  const onDelete = (id: number) => {
    deleteTweet(id);
    queryClient.invalidateQueries('tweets');
  };

  return (
    <div className="flex items-center justify-center">
      <div className="items-center justify-center">
        {props.tweets.map((tweet) => (
          <TweetItem
            key={tweet.id}
            tweet={tweet}
            isOwner={tweet.userId === user?.id}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
