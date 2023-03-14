import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getUser, getTweets, setTweet } from '@/utils/storage';
import { User, Tweet } from '@/utils/type';
import { TweetCard } from '@/components/TweetCard';
import { TweetList } from '@/components/TweetList';

export default function Home() {
  const { data: tweets } = useQuery<Tweet[]>('tweets', () => {
    return getTweets();
  });

  const { data: user } = useQuery<User | null>('user', () => {
    return getUser();
  });

  const queryClient = useQueryClient();

  const onTweet = (text: string) => {
    const tweet: Tweet = {
      id: 0,
      userId: user?.id || 0,
      userName: user?.name || '',
      text: text,
      time: Date.now(),
    };
    setTweet(tweet);

    queryClient.invalidateQueries('tweets');
  };

  return (
    <>
      {user && <TweetCard onTweet={onTweet}></TweetCard>}
      <TweetList tweets={tweets || []} />
    </>
  );
}
