import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { SideBar } from '../../../../../components/SideBar';
import { PageTracking } from '../../../../../components/PageTracking';
import { ArticleContent } from '../../../../../types/article';
import { ArticlePageLayout } from '../../../../../components/ArticlePageLayout';
import { DetailBody } from '../../../../../components/articleDetail/DetailBody';
import { blogDetailData } from '../../../../../lib/microcms';
import { Spinner } from '../../../../../components/ui/Spinner';
import {
  CATEGORY_CONFIG,
  isValidCategory,
} from '../../../../../lib/categories';

type PageProps = {
  params: Promise<{
    category: string;
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const blogData: ArticleContent = await blogDetailData(id);

    return {
      title: blogData.title,
      description: blogData.title,
    };
  } catch {
    return {
      title: 'Not Found',
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { category, id } = await params;

  if (!isValidCategory(category)) {
    notFound();
  }

  const config = CATEGORY_CONFIG[category];
  const blogData: ArticleContent = await blogDetailData(id);

  return (
    <>
      <PageTracking
        pass={category}
        pageTitle={config.title}
        articleTitle={blogData.title}
        articlePass={blogData.id}
      />
      <ArticlePageLayout>
        <SideBar />
        <Suspense fallback={<Spinner />}>
          <DetailBody blog={blogData} />
        </Suspense>
      </ArticlePageLayout>
    </>
  );
}
