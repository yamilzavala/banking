import Sidebar from '@/components/Sidebar';
import '../global.scss'
import Image from 'next/image';
import MobileNav from '@/components/MobileNav';
import styles from './layout.module.scss'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = await getLoggedInUser();
  
  if (!loggedIn) redirect('/sign-in');

  return (
    <main className={styles['main-container-layout']}>
      {/* desktop */}
      <Sidebar user={loggedIn}/>

      <div className={styles['container-layout']}>
        {/* mobile */}
        <div className={`${styles['hide-header-mobile']} sm:p-8 flex items-center gap-2 justify-between p-2`}>
          <Image src='/icons/logo.svg' alt='menu icon' width={34} height={34}/>
          {/* mobile navbar */}
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>

        {children}
      </div>
      
    </main>
  );
}
