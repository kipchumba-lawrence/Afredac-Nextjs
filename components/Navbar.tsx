import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import styles from '../src/styles/Navbar.module.css'; // Assuming you are using CSS modules
import { WagmiProvider } from 'wagmi';
import { config } from '../src/wagmi';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Afredac</h1>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" legacyBehavior><a>Home</a></Link>
        <Link href="/upload" legacyBehavior><a>Upload</a></Link>
        <Link href="/storage" legacyBehavior><a>Storage</a></Link>
        <Link href="/profile" legacyBehavior><a>Profile</a></Link>
      </div>
    </nav>
  );
};

export default Navbar;
