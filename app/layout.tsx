import '@/app/ui/global.css';
import styles from '@/app/ui/home.module.css';
import {inter} from '@/app/ui/fonts';

<div className={styles.shape} />

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
