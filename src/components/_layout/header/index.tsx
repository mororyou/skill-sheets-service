import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="techFountain Logo"
              width={200}
              height={60}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* <Navi /> */}

        {/* <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <Search className="h-5 w-5 text-gray-700" />
          </button>
          <button className="hidden rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800 md:block">
            Subscribe
          </button>
        </div> */}
      </div>
    </header>
  );
}
