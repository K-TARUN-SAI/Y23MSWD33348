import React from "react";
import './table.css';

function ProductTable() {
  
  return (
<div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>
          KL Mart
        </title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
        <header className="bg-white text-purple-600 p-4 flex justify-between items-center">
        <div className="flex items-center">
  <img
    src="images/logo9.png" 
    alt="Shopping Bag"
    className="w-21 h-8 mr-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
  />
  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
    KL Mart
  </h1>


          </div>
          <nav className="flex space-x-12">
            <a className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text" href="#">
              Home
            </a>
            <a className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text" href="#">
              Products
            </a>
            <a className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text" href="#">
              About
            </a>
            <a className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text" href="#">
              Contact
            </a>
          </nav>
          <i className="fas fa-shopping-cart text-2xl">
          </i>
        </header>
        <main className="text-center py-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to KL Mart
          </h2>
          <p className="mb-6 mx-4 sm:mx-20 lg:mx-40">
            Your premier destination for all your shopping needs.<br></br> We offer a wide selection of electronics, groceries, fashion, and home essentials - all under one roof.<br></br> Experience convenience, quality, and great prices with our curated collection of products.
          </p>
          <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full">
            Shop Now
          </button>
        </main>
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6">
              Featured Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between w-full max-w-sm mx-auto">
                <div>
                  <img alt="Premium Smartphone" className="w-full h-40 object-cover mb-4" height={200} src="https://storage.googleapis.com/a1aa/image/BDAME7KuXCoGGV9Cs0r3aEPmz06BebVjqJ7fvqfrRW4hTFePB.jpg" width={300} />
                  <h4 className="text-lg font-bold mb-2">
                    Premium Smartphone
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Latest model with advanced features
                  </p>
                  <p className="text-purple-600 font-bold mb-4">
                    ₹49,999
                  </p>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between w-full max-w-sm mx-auto">
                <div>
                  <img alt="Ultra Laptop" className="w-full h-40 object-cover mb-4" height={200} src="https://storage.googleapis.com/a1aa/image/3I55QgrMMjpxB9gsiMgErqNfCoR8IV9fmf9TxH7HhxYjTFePB.jpg" width={300} />
                  <h4 className="text-lg font-bold mb-2">
                    Ultra Laptop
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Powerful performance for professionals
                  </p>
                  <p className="text-purple-600 font-bold mb-4">
                    ₹89,999
                  </p>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between w-full max-w-sm mx-auto">
                <div>
                  <img alt="Wireless Headphones" className="w-full h-40 object-cover mb-4" height={200} src="https://storage.googleapis.com/a1aa/image/nPRhRaUe0oyrdyXFzrXB1AHd8XSxp6MwQlDCr5pZQqf2pCfnA.jpg" width={300} />
                  <h4 className="text-lg font-bold mb-2">
                    Wireless Headphones
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Premium sound quality
                  </p>
                  <p className="text-purple-600 font-bold mb-4">
                    ₹24,999
                  </p>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between w-full max-w-sm mx-auto">
                <div>
                  <img alt="Smart Watch" className="w-full h-40 object-cover mb-4" height={200} src="https://storage.googleapis.com/a1aa/image/qex9dRVPnIXf90oD6Kyte3J02w2uufnWH8BfkrIKUWOnNV4fE.jpg" width={300} />
                  <h4 className="text-lg font-bold mb-2">
                    Smart Watch
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Track fitness and stay connected
                  </p>
                  <p className="text-purple-600 font-bold mb-4">
                    ₹29,999
                  </p>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6">
              All Products
            </h3>
            <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden mb-10">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="py-3 px-4 text-left">
                    Product
                  </th>
                  <th className="py-3 px-4 text-left">
                    Category
                  </th>
                  <th className="py-3 px-4 text-left">
                    Price
                  </th>
                  <th className="py-3 px-4 text-left">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 flex items-center">
                    <img alt="Premium Smartphone" className="w-10 h-10 object-cover mr-4" height={50} src="https://storage.googleapis.com/a1aa/image/BDAME7KuXCoGGV9Cs0r3aEPmz06BebVjqJ7fvqfrRW4hTFePB.jpg" width={50} />
                    Premium Smartphone
                  </td>
                  <td className="py-3 px-4">
                    Electronics
                  </td>
                  <td className="py-3 px-4">
                    ₹49,999
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                      In Stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                      Add to Cart
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 flex items-center">
                    <img alt="Organic Vegetable Pack" className="w-10 h-10 object-cover mr-4" height={50} src="https://storage.googleapis.com/a1aa/image/ZbyUwdzRo85yMZ5F3fQ7regDFukSrSdveKwISMhd8U1xTFePB.jpg" width={50} />
                    Organic Vegetable Pack
                  </td>
                  <td className="py-3 px-4">
                    Groceries
                  </td>
                  <td className="py-3 px-4">
                    ₹499
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                      In Stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                      Add to Cart
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 flex items-center">
                    <img alt="Ultra Laptop" className="w-10 h-10 object-cover mr-4" height={50} src="https://storage.googleapis.com/a1aa/image/3I55QgrMMjpxB9gsiMgErqNfCoR8IV9fmf9TxH7HhxYjTFePB.jpg" width={50} />
                    Ultra Laptop
                  </td>
                  <td className="py-3 px-4">
                    Electronics
                  </td>
                  <td className="py-3 px-4">
                    ₹89,999
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                      In Stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                      Add to Cart
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 flex items-center">
                    <img alt="Fresh Fruits Basket" className="w-10 h-10 object-cover mr-4" height={50} src="https://storage.googleapis.com/a1aa/image/p5Zrf7TCEvTeMEwFRWeiLFFEImmKfH9JYRev4dLHLxX3NV4fE.jpg" width={50} />
                    Fresh Fruits Basket
                  </td>
                  <td className="py-3 px-4">
                    Groceries
                  </td>
                  <td className="py-3 px-4">
                    ₹799
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                      In Stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                      Add to Cart
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 flex items-center">
                    <img alt="Wireless Headphones" className="w-10 h-10 object-cover mr-4" height={50} src="https://storage.googleapis.com/a1aa/image/nPRhRaUe0oyrdyXFzrXB1AHd8XSxp6MwQlDCr5pZQqf2pCfnA.jpg" width={50} />
                    Wireless Headphones
                  </td>
                  <td className="py-3 px-4">
                    Electronics
                  </td>
                  <td className="py-3 px-4">
                    ₹24,999
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                      In Stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                      Add to Cart
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 flex items-center">
                    <img alt="Premium Coffee Beans" className="w-10 h-10 object-cover mr-4" height={50} src="https://storage.googleapis.com/a1aa/image/h1oMiRbBD6qpDNUZnDYFpKe0eJ7u6cXTok6t9Tx2Y2i1pCfnA.jpg" width={50} />
                    Premium Coffee Beans
                  </td>
                  <td className="py-3 px-4">
                    Groceries
                  </td>
                  <td className="py-3 px-4">
                    ₹899
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                      In Stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                      Add to Cart
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 flex items-center">
                    <img alt="Smart Watch" className="w-10 h-10 object-cover mr-4" height={50} src="https://storage.googleapis.com/a1aa/image/qex9dRVPnIXf90oD6Kyte3J02w2uufnWH8BfkrIKUWOnNV4fE.jpg" width={50} />
                    Smart Watch
                  </td>
                  <td className="py-3 px-4">
                    Electronics
                  </td>
                  <td className="py-3 px-4">
                    ₹29,999
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                      In Stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                      Add to Cart
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 flex items-center">
                    <img alt="Organic Honey" className="w-10 h-10 object-cover mr-4" height={50} src="https://storage.googleapis.com/a1aa/image/1Z7ghE0IIrIUAJDmonApqrz1bfkyo7u7wTf6VMsC7gfnTFePB.jpg" width={50} />
                    Organic Honey
                  </td>
                  <td className="py-3 px-4">
                    Groceries
                  </td>
                  <td className="py-3 px-4">
                    ₹299
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                      In Stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                      Add to Cart
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
  );
}

export default ProductTable;
