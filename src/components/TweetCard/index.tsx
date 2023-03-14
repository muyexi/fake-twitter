import React, { useState } from 'react';
import { Button } from '@/components/Button';

interface Props {
  onTweet: (text: string) => void;
  tweet?: string;
}

export const TweetCard = (props: Props) => {
  const [text, setText] = useState(props.tweet || '');

  return (
    <div className="mb-5 flex items-center justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col items-end space-y-2.5">
          <textarea
            className="w-80 resize-none rounded-md border-2 border-gray-300 bg-gray-50 p-2.5 font-sans text-base text-gray-900 focus:border-sky-500 focus:outline-none"
            placeholder="What's happening?"
            value={text}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              setText(event.target.value);
            }}
          />
          <Button
            primary
            size="small"
            label="Tweet"
            onClick={() => {
              props.onTweet?.(text);
              setText('');
            }}
          />
        </div>
      </div>
    </div>
  );
};
