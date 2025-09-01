import { PostCssMargin } from '@/app/blog/posts/[post]/post-css-margin';
import { PostStaticWebsite } from '@/app/blog/posts/[post]/post-static-website';

export interface Post {
  id: string;
  title: string;
  hook: string;
  date: Date;
  content: React.JSX.Element;
}

const cssMargin = {
  id: '1',
  title: 'Stop Using CSS Margin',
  hook: 'Still using margin in CSS? Use these techniques instead for more robust and maintainable code.',
  date: new Date('2024-06-19'),
  content: PostCssMargin(),
} as Post;

const staticWebsite = {
  id: '2',
  title: 'Host a Static Website in AWS',
  hook: "Bought a domain and don't know what to do next?",
  date: new Date('2024-06-24'),
  content: PostStaticWebsite(),
} as Post;

export const POSTS = [cssMargin, staticWebsite];
