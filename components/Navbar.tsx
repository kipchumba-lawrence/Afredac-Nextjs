import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Afredac</h1>
      </div>
      <Link href="/" legacyBehavior><a>Home</a></Link>
      <Link href="/upload" legacyBehavior><a>Upload</a></Link>
      {/* <Link href="/transactions" legacyBehavior><a>My Transactions</a></Link> */}
      <Link href="/storage" legacyBehavior><a>Storage</a></Link>
      <Link href="/profile" legacyBehavior><a>Profile</a></Link>

    </nav>
);
}
 
export default Navbar;