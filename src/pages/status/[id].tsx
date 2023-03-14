import React, { useEffect, useState } from 'react';
import { Tweet } from '@/utils/type';
import { useRouter } from 'next/router';
import { deleteTweet, getTweet } from "@/utils/storage";
import { TweetItem } from "@/components/TweetItem";
import { useQueryClient } from 'react-query';

interface Props {
  tweet?: Tweet;
}

export default function TweetPage (props: Props) {
  const [tweet, setTweet] = useState<Tweet | undefined>(props.tweet);
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (id) {
        const tweet = getTweet(Number(id))
        setTweet(tweet)
      }
    }
  }, [router.query, router.isReady]);

  const queryClient = useQueryClient();

  const onDelete = (id: number) => {
    deleteTweet(id);
    queryClient.invalidateQueries('tweets');
  };


  return (
    <div>
      {tweet && <TweetItem tweet={tweet} isOwner={false} onDelete={onDelete}/>}
    </div>
  );
};
