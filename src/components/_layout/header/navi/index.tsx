import Link from 'next/link';

export default function index() {
  return (
    <nav className="hidden items-center space-x-8 md:flex">
      <Link href="/" className="font-medium text-gray-700 hover:text-black">
        Home
      </Link>
      <Link href="#" className="font-medium text-gray-700 hover:text-black">
        Articles
      </Link>
      <Link href="#" className="font-medium text-gray-700 hover:text-black">
        Tutorials
      </Link>
      <Link href="#" className="font-medium text-gray-700 hover:text-black">
        Resources
      </Link>
      <Link href="#" className="font-medium text-gray-700 hover:text-black">
        About
      </Link>
    </nav>
  );
}
