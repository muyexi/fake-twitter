import React, { useEffect, useState } from 'react';
import { Tweet } from '@/utils/type';
import { getTweets } from '@/utils/storage';
import { TweetList } from '@/components/TweetList';
import { useRouter } from 'next/router';

export default function UserPage() {
  const router = useRouter();
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (id) {
        const tweets = getTweets(Number(id));
        setTweets(tweets);
      }
    }
  }, [router.query, router.isReady]);

  return (
    <div>
      <TweetList tweets={tweets}/ >
    </div>
  );
}
