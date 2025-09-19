import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISCF Admin - Content Management System',
  description: 'Admin panel for managing ISCF website content',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}