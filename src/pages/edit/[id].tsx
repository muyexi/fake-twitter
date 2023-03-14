import React, { useEffect, useState } from 'react';
import { Tweet } from '@/utils/type';
import { useRouter } from 'next/router';
import { getTweet } from '@/utils/storage';
import { udpateTweet } from '@/utils/storage';
import { TweetCard } from '@/components/TweetCard';

export default function EditPage() {
  const [tweet, setTweet] = useState<Tweet | null>(null);
  const router = useRouter();

  const onUpdate = (text: string) => {
    if (tweet) {
      udpateTweet(tweet.id, text);
      router.push('/');
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;

      if (id) {
        const tweet = getTweet(Number(id));
        setTweet(tweet);
      }
    }
  }, [router.query, router.isReady]);

  return (
    <div>
      {tweet && <TweetCard tweet={tweet?.text} onTweet={onUpdate}></TweetCard>}
    </div>
  );
}
