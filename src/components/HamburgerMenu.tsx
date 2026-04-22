import Link from 'next/link';

import { IoIosMenu } from 'react-icons/io';
import {
  FaBook,
  FaGamepad,
  FaHome,
  FaLaptopCode,
  FaUser,
} from 'react-icons/fa';
import { ElementType, FC, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/Sheet';
import { Button } from '../components/ui/Button';

type MenuItem = {
  href: string;
  icon: ElementType;
  text: string;
  onClick?: () => void;
};

const MENU_ITEMS: MenuItem[] = [
  { href: '/', icon: FaHome, text: 'トップページ' },
  { href: '/articles/tech', icon: FaLaptopCode, text: '技術関連記事' },
  { href: '/articles/books', icon: FaBook, text: '読んだ本' },
  { href: '/articles/hobby', icon: FaGamepad, text: '趣味' },
  { href: '/profile', icon: FaUser, text: 'プロフィール' },
];

const MenuLink: FC<MenuItem> = ({ href, icon: Icon, text, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-gray-700 dark:text-gray-300 py-2 mt-7 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 first:mt-4 pl-2"
  >
    <Icon className="mr-2 inline mb-1" />
    {text}
  </Link>
);

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="ml-3">
          <IoIosMenu className="h-[1.0rem] w-[1.2rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-gray-800">
        <SheetHeader>
          <SheetTitle className="text-gray-900 dark:text-gray-100">
            MENU
          </SheetTitle>
        </SheetHeader>
        <nav className="text-left fixed z-10 sm:w-2/5 w-3/5 h-screen flex flex-col justify-start pt-2 ease-linear duration-300 bg-white dark:bg-gray-800">
          {MENU_ITEMS.map((item) => (
            <MenuLink key={item.href} {...item} onClick={() => setOpen(false)} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
