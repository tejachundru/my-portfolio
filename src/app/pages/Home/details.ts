/* eslint-disable @typescript-eslint/naming-convention */

export type DetailType = {
  key: string;
  value: string;
  emoji?: string;
  type?: 'text' | 'link' | 'email';
};

export const myData: DetailType[] = [
  {
    key: 'Name',
    value: 'Teja Chundru',
    emoji: '😊',
  },
  {
    key: 'Profession',
    value: 'Software Engineer',
    emoji: '👨🏻‍💻',
  },
  {
    key: 'What I do',
    value:
      'I build things for the Web 🖥️  and Mobile 📱 devices and support those data intense apps with Backend development 🌐',
    emoji: '💼',
  },
  {
    key: 'Languages That i Know to talk with computers',
    value: 'JavaScript, TypeScript, Swift, Objective C',
    emoji: '🗣️',
  },
  {
    key: 'I can work with',
    value: 'React, React Native, Node and many more ',
    emoji: '🏗',
  },
  {
    key: 'What I like',
    value: 'I like to build things and solve problems.',
    emoji: '👌',
  },
  {
    key: 'Who I am',
    value:
      'I am a Software Engineer, a Full stack Developer,Mobile Developer, a Learner, a Mentor, a Friend, a Son, a Human',
    emoji: '🤔',
  },
  {
    key: 'What I am Learning',
    value:
      'I am learning to be a better human being and a better developer than I was yesterday',
    emoji: '📚',
  },
  {
    key: 'hobbies',
    value:
      'I like to watch movies, listen to music, read books, travel, and explore new things',
    emoji: '🎨',
  },
  {
    key: 'Contact me',
    value: 'chundruteja218@gmail.com',
    emoji: '📧',
  },
  {
    key: 'Github',
    value: 'https://github.com/tejachundru',
    emoji: '🐙',
  },
];
