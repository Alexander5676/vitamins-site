import type { Metadata } from 'next';
import '../styles/globals.css';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Витамины и здоровье',
  description: 'Полный справочник витаминов',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-green-50 dark:bg-gray-900 transition-colors">
        <header className="flex justify-end p-4">
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
