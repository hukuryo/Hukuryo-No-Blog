'use client';

import Link from 'next/link';
import { FaBook, FaLaptopCode, FaGamepad, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HamburgerMenu } from './HamburgerMenu';
import { ElementType, FC } from 'react';
import { ModeToggle } from './ui/Toggle';
import { Button } from './ui/Button';

type NavLink = {
  href: string;
  icon: ElementType;
  text: string;
};

type SocialLink = {
  href: string;
  icon: ElementType;
};

const NAV_LINKS: NavLink[] = [
  { href: '/articles/tech', icon: FaLaptopCode, text: '技術関連記事' },
  { href: '/articles/books', icon: FaBook, text: '読んだ本' },
  { href: '/articles/hobby', icon: FaGamepad, text: '趣味' },
];

const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://twitter.com/hukuryo_', icon: FaXTwitter },
  { href: 'https://github.com/hukuryo', icon: FaGithub },
];

const Logo: FC = () => (
  <Link href="/" className="font-bold md:text-2xl hover:opacity-70 text-sm">
    Hukuryo-no-Blog
  </Link>
);

const NavLinks: FC = () => (
  <div className="ml-5">
    {NAV_LINKS.map(({ href, icon: Icon, text }) => (
      <Link
        key={href}
        href={href}
        className="text-sm px-3 ease-in-out duration-300 hover:opacity-70"
      >
        <Icon className="inline mr-1 mb-1" />
        {text}
      </Link>
    ))}
  </div>
);

const SocialButtons: FC = () => (
  <>
    {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
      <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="mx-1">
          <Icon />
        </Button>
      </Link>
    ))}
  </>
);

export const Header = () => {
  return (
    <header>
      <div className="shadow-lg lg:flex lg:justify-center lg:items-center h-20 border border-gray-200 dark:border-gray-600 dark:bg-gray-700">
        <div className="items-center justify-between hidden lg:flex w-full mx-5">
          <div className="flex items-center">
            <Logo />
            <NavLinks />
          </div>
          <div className="flex items-center">
            <SocialButtons />
            <ModeToggle />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex justify-between items-center h-full mt-6 mx-4">
            <Logo />
            <div className="flex items-center">
              <SocialButtons />
              <ModeToggle />
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
