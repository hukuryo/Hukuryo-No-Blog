import Link from 'next/link';
import type { ReactNode } from 'react';

type ErrorRecoveryLayoutProps = {
  children: ReactNode;
};

export function ErrorRecoveryLayout({ children }: ErrorRecoveryLayoutProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-red-600">Oops!</h1>
        <p className="mt-2 text-lg">エラーが発生しました。</p>
        {children}
        <Link
          href="/"
          className="mt-10 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
