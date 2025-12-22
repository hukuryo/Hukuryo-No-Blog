import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { PageTitle } from '../../../../components/PageTitle';
import { ArticleList } from '../../../../components/ArticleList';
import { SideBar } from '../../../../components/SideBar';
import { Layout } from '../../../../components/Layout';
import { PageTracking } from '../../../../components/PageTracking';
import { ResponsiveProfile } from '../../../../components/ResponsiveProfile';
import { Spinner } from '../../../../components/ui/Spinner';
import {
  CATEGORY_CONFIG,
  isValidCategory,
  VALID_CATEGORIES,
} from '../../../../lib/categories';

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;

  if (!isValidCategory(category)) {
    return {
      title: 'Not Found',
    };
  }

  const config = CATEGORY_CONFIG[category];

  return {
    title: config.title,
    description: config.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { category } = await params;

  if (!isValidCategory(category)) {
    notFound();
  }

  const config = CATEGORY_CONFIG[category];

  return (
    <>
      <PageTracking pass={category} pageTitle={config.title} />
      <Layout>
        <PageTitle title={config.title} />
        <div className="md:flex justify-between">
          <Suspense fallback={<Spinner />}>
            <ArticleList pass={category} />
          </Suspense>
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
    </>
  );
}
