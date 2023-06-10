import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Everything Foodie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 shadow">
          <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-xl font-bold text-red-500">Everything Foodie</h1>
            <div className="flex space-x-2">
              <Link href={"login"}>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow">
                Login
              </button>
              </Link>
              <Link href={"register"}>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow">
                Register
              </button>
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('https://b.zmtcdn.com/data/pictures/chains/2/19889342/402a6114e65b6a8f30a70cca1a9b7cca.jpg')" }}>
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center space-y-6 py-20">
              <h2 className="text-3xl font-bold text-white">Welcome to Everything Foodie!</h2>
              <p className="text-white">
                Your one place for managing your orders and keeping track of finances for your business
              </p>
              <a
                href="/dashboard"
                className="bg-red-500 text-white px-6 py-3 rounded-md shadow"
              >
                Get Started!
              </a>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}
