// app/components/NavBar.js
import Link from 'next/link';

const NavBar = () => (
  <nav className="p-4 bg-gray-800 text-white">
    <Link href="/">Home</Link>
    <Link href="/about" className="ml-4">About</Link>
    <Link href="/projects" className="ml-4">Projects</Link>
    <Link href="/contact" className="ml-4">Contact</Link>
  </nav>
);

export default NavBar;
