import { useState, useEffect } from 'react';
import { menuData } from './Data';

const MenuEditorTabContent = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    // Simulate fetching menu data with a delay
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating a delay of 1 second
      setMenuItems(menuData);
    };

    fetchData();
  }, []);

  const handleDelete = (categoryId, itemId) => {
    setMenuItems(prevMenuItems =>
      prevMenuItems.map(category => {
        if (category.category === categoryId) {
          category.items = category.items.filter(item => item.id !== itemId);
        }
        return category;
      })
    );
  };

  const handleAddItem = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setNewItem({
      title: '',
      description: '',
      price: '',
      image: ''
    });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewItem(prevNewItem => ({
      ...prevNewItem,
      [name]: value
    }));
  };

  const handleUploadItem = () => {
    const newItemData = {
      id: menuItems.length + 1,
      title: newItem.title,
      description: newItem.description,
      price: parseFloat(newItem.price),
      image: newItem.image
    };

    setMenuItems(prevMenuItems =>
      prevMenuItems.map(category => {
        if (category.category === 'New Items') {
          category.items.push(newItemData);
        }
        return category;
      })
    );

    setShowModal(false);
    setNewItem({
      title: '',
      description: '',
      price: '',
      image: ''
    });
  };

  return (
    <div className="container mx-auto">
      {menuItems.map(category => (
        <div key={category.category}>
          <h2 className="text-xl font-bold my-4">{category.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {category.items.map(item => (
              <div key={item.id} className="bg-white rounded shadow p-4">
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-gray-800 font-bold">R{item.price.toFixed(2)}</p>
                <button
                  onClick={() => handleDelete(category.category, item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Delete
                </button>
              </div>
            ))}
            {/* Add Item Icon */}
            <div
              className="bg-white rounded shadow p-4 flex flex-col items-center justify-center cursor-pointer"
              onClick={handleAddItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500 hover:text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 9h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 010-2h3V6a1 1 0 012 0v3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-500 mt-2">Add Item</span>
            </div>
          </div>
        </div>
      ))}
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded shadow p-4">
            {/* Modal Content */}
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                required={true}
                type="text"
                id="title"
                name="title"
                value={newItem.title}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                required={true}
                id="description"
                name="description"
                value={newItem.description}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input
                required={true}
                type="number"
                id="price"
                name="price"
                step="0.01"
                value={newItem.price}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                Image URL
              </label>
              <input
                required={true}
                type="text"
                id="image"
                name="image"
                value={newItem.image}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleModalClose}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleUploadItem}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuEditorTabContent;
