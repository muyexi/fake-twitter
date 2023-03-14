import { User, Tweet } from '@/utils/type';

export function getUser(): User | null {
  const id = localStorage.getItem('currentUser');
  let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  if (id) {
    users = users.filter((user) => user.id.toString() == id);
    return users[0];
  } else {
    return null;
  }
}

export function setUser(user: User) {
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  user.id = users.length + 1;
  console.log(users);

  if (users) {
    users.push(user);
  } else {
    users = [user];
  }

  localStorage.setItem('users', JSON.stringify(users));
}

const initialTweet: Tweet = {
  id: 1,
  userId: 1,
  userName: 'admin',
  text: 'Welcome!',
  time: Date.now(),
};

export function getTweets(id?: number): Tweet[] {
  let tweets: Tweet[] = JSON.parse(localStorage.getItem('tweets') || '[]');
  if (id) {
    tweets = tweets.filter((tweet) => tweet.userId === id);
  }

  if (tweets.length == 0) {
    tweets.push(initialTweet);
  }

  tweets.sort((a, b) => b.id - a.id);
  return tweets;
}

export function getTweet(id: number): Tweet {
  const tweets = getTweets();
  const tweet = tweets.filter((tweet) => tweet.id == id)[0];

  return tweet;
}

export function setTweet(tweet: Tweet) {
  let tweets = getTweets();
  tweet.id = tweets.length + 1;

  tweets.push(tweet);
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

export function deleteTweet(id: number) {
  const tweets = getTweets();
  const index = tweets.findIndex((tweet) => tweet.id === id);
  tweets.splice(index, 1);

  localStorage.setItem('tweets', JSON.stringify(tweets));
}

export function udpateTweet(id: number, text: string) {
  const tweets = getTweets();
  const index = tweets.findIndex((tweet) => tweet.id === id);
  console.log('id:', id);
  console.log('index:', index);
  tweets[index].text = text;

  localStorage.setItem('tweets', JSON.stringify(tweets));
}

export function login(user: User) {
  setUser(user);
  localStorage.setItem('currentUser', user.id.toString());
}

export function logout() {
  localStorage.removeItem('currentUser');
}
