import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Humanity Bridge | Connecting Humanity. Changing Lives.',
  description: 'A global platform connecting people who want to help with verified humanitarian causes and communities in need.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
