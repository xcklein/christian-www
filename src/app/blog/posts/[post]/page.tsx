import { BasicPage } from '@/components/basic-page';
import { Text } from '@/components/material';
import { POSTS } from '@/libs/posts';

export function generateStaticParams() {
  return POSTS.map((p) => ({ post: p.id }));
}

export default function Post({ params }: { params: { post: string } }) {
  const post = POSTS.find((p) => p.id === params.post);

  if (!post) {
    return (
      <BasicPage>
        <Text>Post not found.</Text>
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <div className="p-2 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Text variant="h2">{post.title}</Text>
          <Text variant="small">{post.date.toLocaleDateString()}</Text>
        </div>
        {post.content}
      </div>
    </BasicPage>
  );
}
