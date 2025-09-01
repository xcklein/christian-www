import { BasicPage } from '@/components/basic-page';
import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Text,
  Tooltip,
} from '@/components/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      name: 'MMORPB',
      desc: 'Massive Multiplayer Online Role-Playing Bot',
      href: 'https://www.mmorpb.com',
      image: '/mmorpb_circle.png',
    },
    {
      name: 'Chum (WIP)',
      desc: 'Your favorite companion',
      href: 'https://chum.gg',
      image: '/chum.png',
    },
  ];

  return (
    <BasicPage>
      <div className="p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/ck_avatar_circle.png"
            alt="Image of Christian"
            width={384}
            height={384}
          />

          <Text variant="h1">Christian</Text>
        </div>

        <div className="flex gap-2 justify-center">
          <Tooltip content="GitHub">
            <Link href="https://github.com/xcklein">
              <IconButton
                className="bg-[#333333] text-[#f8f8f8] shadow-[#333333]/20 hover:shadow-[#333333]/40"
                size="lg"
              >
                <i className="fab fa-github text-lg" />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip content="LinkedIn">
            <Link href="https://linkedin.com/in/xcklein">
              <IconButton
                className="bg-[#0072B1] text-[#f8f8f8] shadow-[#0072B1]/20 hover:shadow-[#0072B1]/40"
                size="lg"
              >
                <i className="fab fa-linkedin text-lg" />
              </IconButton>
            </Link>
          </Tooltip>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {projects.map((p, i) => (
            <Card
              key={i}
              className="bg-palette-white dark:bg-palette-black text-palette-black dark:text-palette-white w-72"
            >
              <CardHeader floated={false} shadow={false} color="transparent">
                <Link href={p.href}>
                  <div className="max-w-[256px] max-h-[256px] p-8">
                    <Image
                      src={p.image}
                      alt={'Image of ' + p.name}
                      width={256}
                      height={256}
                    />
                  </div>
                </Link>
              </CardHeader>
              <CardBody>
                <Link href={p.href} className="hover:text-palette-blue">
                  <Text variant="h4">{p.name}</Text>
                </Link>
                <Text>{p.desc}</Text>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </BasicPage>
  );
}
