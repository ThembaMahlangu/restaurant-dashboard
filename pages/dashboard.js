import DashboardTabContent from '@/components/DashboardTabContent';
import FinancesTabContent from '@/components/FinancesTabContent';
import Footer from '@/components/Footer';
import MenuEditorTabContent from '@/components/MenuEditorTabContent';
import Navbar from '@/components/Navbar';
import OrdersTabContent from '@/components/OrdersTabContent';
import Head from 'next/head';
import { useState } from 'react';
import {
  RiDashboardLine,
  RiShoppingCartLine,
  RiMoneyDollarCircleLine,
  RiMenuUnfoldLine,
  RiMenuFoldLine,
  RiEdit2Line,
  RiCpuLine,
  RiSettings2Line,
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

  const getTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTabContent />;
      case 'orders':
        return <OrdersTabContent />;
      case 'finances':
        return <FinancesTabContent />;
      case 'menu-editor':
        return <MenuEditorTabContent />;
      case 'performance':
        return <PerformanceTabContent />;
      case 'settings':
        return <SettingsTabContent />;
      default:
        return null;
    }
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
                <li
                  className={`flex items-center space-x-4 px-4 py-2 rounded-md cursor-pointer ${
                    activeTab === 'menu-editor' ? 'bg-red-500 text-white' : 'text-gray-200 hover:bg-gray-700'
                  }`}
                  onClick={() => handleTabChange('menu-editor')}
                >
                  <RiEdit2Line size={20} />
                  <span>Menu Editor</span>
                </li>
                <li
                  className={`flex items-center space-x-4 px-4 py-2 rounded-md cursor-pointer ${
                    activeTab === 'performance' ? 'bg-red-500 text-white' : 'text-gray-200 hover:bg-gray-700'
                  }`}
                  onClick={() => handleTabChange('performance')}
                >
                  <RiCpuLine size={20} />
                  <span>Performance</span>
                </li>
                <li
                  className={`flex items-center space-x-4 px-4 py-2 rounded-md cursor-pointer ${
                    activeTab === 'settings' ? 'bg-red-500 text-white' : 'text-gray-200 hover:bg-gray-700'
                  }`}
                  onClick={() => handleTabChange('settings')}
                >
                  <RiSettings2Line size={20} />
                  <span>Settings</span>
                </li>
              </ul>
            </nav>
          </aside>
        )}

        <main className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('https://b.zmtcdn.com/data/pictures/chains/2/19889342/402a6114e65b6a8f30a70cca1a9b7cca.jpg')" }}>
          <div className="px-4 py-1">
            <div className="flex items-center mb-0">
              {isSideMenuOpen ? (
                <RiMenuFoldLine size={24} onClick={handleToggleSideMenu} className="text-white cursor-pointer" />
              ) : (
                <RiMenuUnfoldLine size={24} onClick={handleToggleSideMenu} className="text-white cursor-pointer" />
              )}
              <h1 className="text-white text-3xl font-bold ml-4">{activeTab}</h1>
            </div>
            <div className="flex flex-col items-center space-y-6 py-20">
              {getTabContent()}
            </div>
          </div>
        </main>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
