import React from 'react';

const DashboardTabContent = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8" style={{ height: 'fit-content', overflow: 'auto' }}>
      <div className="w-full md:w-3/4">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold mb-6">Today's Orders</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Example order card */}
            <div className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Order #12345</h3>
              <p>Customer: John Doe</p>
              <p>Items: 3</p>
              <p>Total: R50.00</p>
            </div>

            {/* Example order card */}
            <div className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Order #54321</h3>
              <p>Customer: Jane Smith</p>
              <p>Items: 2</p>
              <p>Total: R30.00</p>
            </div>

            {/* Add more order cards here */}
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md mt-8 p-6">
          <h2 className="text-2xl font-bold mb-6">Revenue Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Example revenue summary card */}
            <div className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Product A</h3>
              <p>Sales: 50</p>
              <p>Revenue: R500.00</p>
            </div>

            {/* Example revenue summary card */}
            <div className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Product B</h3>
              <p>Sales: 30</p>
              <p>Revenue: R300.00</p>
            </div>

            {/* Add more revenue summary cards here */}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold mb-6">Current Time</h2>
          <div className="text-4xl font-bold">{currentTime}</div>
        </div>
        {/* New Customers */}
        <div className="border border-gray-300 p-4 rounded-md bg-gray-800">
          <h3 className="text-lg font-semibold">New Customers</h3>
          <div className="flex flex-col gap-2 mt-4">
            <div>
              <p className="font-semibold">Customer: John Doe</p>
              <p className="text-sm text-gray-500">Order: #12345</p>
              <p className="text-sm text-gray-500">Items: 3</p>
              <p className="text-sm text-gray-500">Total: R50.00</p>
            </div>
            <div>
              <p className="font-semibold">Customer: Jane Smith</p>
              <p className="text-sm text-gray-500">Order: #54321</p>
              <p className="text-sm text-gray-500">Items: 2</p>
              <p className="text-sm text-gray-500">Total: R30.00</p>
            </div>
            {/* Add more new customers here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTabContent;
