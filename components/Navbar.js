import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-gray-800 shadow">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-xl font-bold text-red-500">Everything Foodie</h1>
        <div className="flex space-x-2">
          <Link href={"login"} legacyBehavior>
            <a className="bg-red-500 text-white px-4 py-2 rounded-md shadow">
              Log Off
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
