import { Metadata } from 'next';

import { ErrorRecoveryLayout } from '../../components/ErrorRecoveryLayout';

export const metadata: Metadata = {
  title: 'ページが見つかりませんでした。',
  description: 'ページが見つかりませんでした。',
};

export default function CustomErrorPage() {
  return (
    <ErrorRecoveryLayout>
      <p className="mt-2 mb-10">
        申し訳ありませんが、リクエストされたページが見つかりませんでした。
      </p>
    </ErrorRecoveryLayout>
  );
}
