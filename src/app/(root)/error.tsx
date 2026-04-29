'use client';

import { ErrorRecoveryLayout } from '../../components/ErrorRecoveryLayout';

export default function ErrorPage500() {
  return (
    <ErrorRecoveryLayout>
      <p className="mt-2 mb-10">サーバー側でエラーが発生しました。</p>
    </ErrorRecoveryLayout>
  );
}
