import styles from './layout.module.scss'
import Image from 'next/image'
// import nextjsLogo from '../public/nextjs.svg'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>

                Made with {' '}
                <span className={styles.logo}>
                    <Image src="/../public/nextjs.svg" alt="Next.js Logo" width={60} height={30} />
                </span>
                
            </footer>
        </div>
    )
  }