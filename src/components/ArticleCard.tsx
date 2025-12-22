import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

import { ArticleContent } from '../types/article';
import { formatDate } from '../lib/utils';

type ArticleCardProps = {
  article: ArticleContent;
  pass: string;
};

export const ArticleCard: FC<ArticleCardProps> = ({ article, pass }) => (
  <Link href={`/articles/${pass}/${article.id}`} className="block h-full border-black">
    <article className="h-full flex flex-col shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:opacity-80 bg-white dark:bg-slate-800">
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={article.imageUrl.url}
          alt="見出し画像"
          width={400}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-sm rounded-full p-2 bg-slate-300 dark:bg-slate-600 mr-2">
            {article.category}
          </span>
          <FaClock className="h-3 mr-1 inline mb-1" />
          <small>{formatDate(article.publishedAt)}</small>
        </div>
        <h4 className="font-bold pt-2 transition-colors group-hover:text-primary-500 flex-grow">
          {article.title}
        </h4>
      </div>
    </article>
  </Link>
);
