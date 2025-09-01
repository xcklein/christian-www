'use client';

import { BasicPage } from '@/components/basic-page';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Text,
} from '@/components/material';
import { POSTS } from '@/libs/posts';
import { useRouter } from 'next/navigation';

export default function Blog() {
  const router = useRouter();

  const onReadClick = (post: string) => {
    router.push(`/blog/posts/${post}`);
  };

  return (
    <BasicPage>
      <div className="flex flex-col gap-4 p-2">
        <Text variant="h1">Blog</Text>
        <div className="flex flex-col gap-4">
          {POSTS.map((p, i) => (
            <Card
              key={i}
              className="p-2 bg-palette-white dark:bg-palette-black text-palette-black dark:text-palette-white"
            >
              <CardBody className="p-2">
                <div className="flex flex-col gap-1">
                  <Text variant="h4">{p.title}</Text>
                  <Text variant="small">{p.hook}</Text>
                </div>
              </CardBody>
              <CardFooter className="p-2">
                <div className="flex justify-between items-center">
                  <div className="flex-grow-0">
                    <Button
                      color="blue"
                      size="sm"
                      onClick={() => onReadClick(p.id)}
                    >
                      Read More
                    </Button>
                  </div>
                  <div className="flex-grow-1" />
                  <div className="flex-grow-0">
                    <Text variant="small">{p.date.toLocaleDateString()}</Text>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </BasicPage>
  );
}
