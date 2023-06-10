import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import { useState } from 'react';
import {
  RiDashboardLine,
  RiShoppingCartLine,
  RiMoneyDollarCircleLine,
  RiMenuUnfoldLine,
  RiMenuFoldLine,
} from 'react-icons/ri';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleToggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dashboard - Everything Foodie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="flex flex-grow">
        {isSideMenuOpen && (
          <aside className="bg-gray-500 w-64 py-2 px-2">
            <nav>
              <ul>
                <li
                  className={`flex items-center space-x-4 px-4 py-2 rounded-md cursor-pointer ${
                    activeTab === 'dashboard' ? 'bg-red-500 text-white' : 'text-gray-200 hover:bg-gray-700'
                  }`}
                  onClick={() => handleTabChange('dashboard')}
                >
                  <RiDashboardLine size={20} />
                  <span>Dashboard</span>
                </li>
                <li
                  className={`flex items-center space-x-4 px-4 py-2 rounded-md cursor-pointer ${
                    activeTab === 'orders' ? 'bg-red-500 text-white' : 'text-gray-200 hover:bg-gray-700'
                  }`}
                  onClick={() => handleTabChange('orders')}
                >
                  <RiShoppingCartLine size={20} />
                  <span>Orders</span>
                </li>
                <li
                  className={`flex items-center space-x-4 px-4 py-2 rounded-md cursor-pointer ${
                    activeTab === 'finances' ? 'bg-red-500 text-white' : 'text-gray-200 hover:bg-gray-700'
                  }`}
                  onClick={() => handleTabChange('finances')}
                >
                  <RiMoneyDollarCircleLine size={20} />
                  <span>Finances</span>
                </li>
              </ul>
            </nav>
          </aside>
        )}

        <main className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('https://b.zmtcdn.com/data/pictures/chains/2/19889342/402a6114e65b6a8f30a70cca1a9b7cca.jpg')" }}>
          <div className="mx-auto px-4 py-7">
            <div className="flex items-center justify-between mb-4">
              {isSideMenuOpen ? (
                <RiMenuFoldLine size={24} onClick={handleToggleSideMenu} className="text-white cursor-pointer" />
              ) : (
                <RiMenuUnfoldLine size={24} onClick={handleToggleSideMenu} className="text-white cursor-pointer" />
              )}
              <h2 className="text-3xl font-bold text-white">
                {activeTab === 'dashboard'
                  ? 'Dashboard'
                  : activeTab === 'orders'
                  ? 'Orders'
                  : activeTab === 'finances'
                  ? 'Finances'
                  : ''}
              </h2>
              <div />
            </div>
            <div className="flex flex-col items-center space-y-6 py-20">
              {activeTab === 'dashboard' && (
                <>
                  <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                  <p className="text-white">
                    Welcome to your Everything Foodie dashboard. Here you can manage your online orders and finances.
                  </p>
                </>
              )}
              {activeTab === 'orders' && (
                <>
                  <h2 className="text-3xl font-bold text-white">Orders</h2>
                  <p className="text-white">Manage your online orders and keep track of new and completed orders.</p>
                </>
              )}
              {activeTab === 'finances' && (
                <>
                  <h2 className="text-3xl font-bold text-white">Finances</h2>
                  <p className="text-white">Track your financial information and view reports for your business.</p>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
