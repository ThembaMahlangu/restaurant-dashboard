import { useState } from 'react';
import { orders } from './Data';

const OrdersTabComponent = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="bg-white py-6 px-6 rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Order Number', 'Reference Code', 'Category', 'Item Names', 'Quantity', 'Total Price', 'Status', 'Actions'].map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.orderNumber} className="hover:bg-gray-100">
              <td className="px-6 py-4">{order.orderNumber}</td>
              <td className="px-6 py-4">{order.referenceCode}</td>
              <td className="px-6 py-4">{order.category}</td>
              <td className="px-6 py-4">{order.itemNames.join(', ')}</td>
              <td className="px-6 py-4">{order.quantity}</td>
              <td className="px-6 py-4">{order.totalPrice}</td>
              <td className="px-6 py-4">{order.status}</td>
              <td className="px-6 py-4">
                <button
                  className="text-blue-600 hover:text-blue-800 underline"
                  onClick={() => openModal(order)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg relative">
            <h2 className="text-lg font-bold mb-4">Order Details</h2>
            <p>
              <strong>Order Number:</strong> {selectedOrder.orderNumber}
            </p>
            <p>
              <strong>Reference Code:</strong> {selectedOrder.referenceCode}
            </p>
            <p>
              <strong>Category:</strong> {selectedOrder.category}
            </p>
            <p>
              <strong>Item Names:</strong> {selectedOrder.itemNames.join(', ')}
            </p>
            <p>
              <strong>Quantity:</strong> {selectedOrder.quantity}
            </p>
            <p>
              <strong>Total Price:</strong> {selectedOrder.totalPrice}
            </p>
            <p>
              <strong>Status:</strong> {selectedOrder.status}
            </p>
            <div className="mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600">
                Accept
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersTabComponent;