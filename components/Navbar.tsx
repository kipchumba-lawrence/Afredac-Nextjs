import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useState } from 'react'; // Import useState to manage responsive menu toggle
import styles from '../src/styles/Navbar.module.css'; // Assuming you are using CSS modules
import { WagmiProvider } from 'wagmi';
import { config } from '../src/wagmi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Afredac</h1>
      </div>
      <div className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
        <Link href="/" legacyBehavior><a>Dashboard</a></Link>
        <Link href="/upload" legacyBehavior><a>Upload</a></Link>
        <Link href="/storage" legacyBehavior><a>Datasets</a></Link>
        <Link href="/profile" legacyBehavior><a>Collaborations</a></Link>
        <Link href="/profile" legacyBehavior><a>Profile</a></Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
