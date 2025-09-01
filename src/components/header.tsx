'use client';

import { DarkButton } from '@/components/dark-button';
import { DarkContext } from '@/components/dark-provider';
import { Drawer, IconButton, Navbar, Text } from '@/components/material';
import Link from 'next/link';
import { useContext, useState } from 'react';

export function Header({ className }: { className?: string }) {
  const links = [
    { text: 'Home', href: '/' },
    { text: 'Blog', href: '/blog' },
  ];

  const { isDark } = useContext(DarkContext);

  const [open, setOpen] = useState(false);

  const drawerOpen = () => setOpen(true);
  const drawerClose = () => setOpen(false);

  return (
    <div className={className}>
      <Navbar className="p-2 border-none bg-palette-white dark:bg-palette-black text-palette-black dark:text-palette-white">
        <div className="flex justify-between items-center">
          <div className="flex-grow-0 ml-2">
            <Link href="/">
              <Text variant="h5">Hello, world!</Text>
            </Link>
          </div>
          <div className="flex-grow-1" />
          <div className="flex-grow-0">
            <div className="hidden md:flex gap-4 items-center">
              {links.map((l, i) => (
                <Link className="hover:text-palette-blue" key={i} href={l.href}>
                  <Text variant="h6">{l.text}</Text>
                </Link>
              ))}
              <DarkButton className="dark:text-palette-black" />
            </div>
            <div className="flex md:hidden">
              <IconButton
                variant="text"
                color={isDark ? 'white' : 'black'}
                onClick={drawerOpen}
              >
                <i className="fas fa-bars text-lg" />
              </IconButton>
            </div>
          </div>
        </div>
      </Navbar>
      <Drawer
        placement="left"
        open={open}
        onClose={drawerClose}
        className="p-4 bg-palette-offwhite dark:bg-palette-grey"
      >
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div className="flex-grow-0">
              <Link href="/">
                <Text variant="h4">Hello, world!</Text>
              </Link>
            </div>
            <div className="flex-grow-1" />
            <div className="flex-grow-0">
              <DarkButton className="dark:text-palette-black" />
            </div>
          </div>
          <nav className="flex flex-col gap-4">
            {links.map((l, i) => (
              <Link className="hover:text-palette-blue" key={i} href={l.href}>
                <Text variant="h5">{l.text}</Text>
              </Link>
            ))}
          </nav>
        </div>
      </Drawer>
    </div>
  );
}
