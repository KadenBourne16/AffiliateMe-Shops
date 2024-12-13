import React from 'react'

function ProductForm() {
  return (
    <div className='bg-slate-50'>
        <div className="max-w-7xl mx-auto p-4">
            <div className=" p-2">
                <div className="flex justify-between items-center mb-6 shadow-lg h-16 w-full p-5">
                    <h1 className="text-2xl font-semibold">Add a product</h1>
                    <div>
                        <button className="text-gray-500 mr-4">Discard</button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add product</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Information Card */}
                    <div className="space-y-6">
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Basic information</h2>
                            <div className="space-y-4">
                                <input type="text" placeholder="Product name" className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Manufacturar Name:" className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Product Identification No.:" className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Product Summary:" className="w-full p-2 border rounded" />
                            </div>
                        </div>
                        {/* Add Images Card */}
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Add Images</h2>
                            <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded">
                                <i className="fas fa-upload text-2xl text-gray-400"></i>
                                <p className="text-gray-400 mt-2">Drag your image here</p>
                                <p className="text-blue-600">or, <a href="#" className="underline">Browse</a></p>
                            </div>
                        </div>
                        {/* Details Card */}
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Details</h2>
                            <div className="space-y-4">
                                <textarea placeholder="Product description:" className="w-full p-2 border rounded h-32"></textarea>
                                <div className="grid grid-cols-2 gap-4">
                                    <select className="w-full p-2 border rounded">
                                        <option>Select</option>
                                    </select>
                                    <select className="w-full p-2 border rounded">
                                        <option>Select</option>
                                    </select>
                                </div>
                                <input type="date" placeholder="Release Date:" className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Warranty Length:" className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Warranty Policy:" className="w-full p-2 border rounded" />
                            </div>
                        </div>
                        {/* Specifications Card */}
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Specifications</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center p-2 border rounded">
                                    <span>Processor</span>
                                    <span>2.3GHz quad-core Intel Core i5</span>
                                    <i className="fas fa-trash text-red-500 cursor-pointer"></i>
                                </div>
                                <div className="flex justify-between items-center p-2 border rounded">
                                    <span>Memory</span>
                                    <span>8GB of 2133MHz LPDDR3 onboard memory</span>
                                    <i className="fas fa-trash text-red-500 cursor-pointer"></i>
                                </div>
                                <div className="flex justify-between items-center p-2 border rounded">
                                    <span>Brand name</span>
                                    <span>Apple</span>
                                    <i className="fas fa-trash text-red-500 cursor-pointer"></i>
                                </div>
                                <div className="flex space-x-2">
                                    <input type="text" placeholder="Label" className="w-full p-2 border rounded" />
                                    <input type="text" placeholder="Property" className="w-full p-2 border rounded" />
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Type, Tags, Pricing, Shipping, and Stock Status Cards */}
                    <div className="space-y-6">
                        {/* Type Card */}
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Type</h2>
                            <div className="space-y-4">
                                <select className="w-full p-2 border rounded">
                                    <option>Select category:</option>
                                </select>
                                <select className="w-full p-2 border rounded">
                                    <option>Select sub-category:</option>
                                </select>
                            </div>
                        </div>
                        {/* Tags Card */}
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Tags</h2>
                            <select className="w-full p-2 border rounded">
                                <option>Add a keyword:</option>
                            </select>
                        </div>
                        {/* Pricing Card */}
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Pricing</h2>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <input type="text" placeholder="Base Price:" className="w-full p-2 border rounded" />
                                    <select className="p-2 border rounded">
                                        <option>USD</option>
                                    </select>
                                </div>
                                <input type="text" placeholder="Discount in percentage:" className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Final price:" className="w-full p-2 border rounded" />
                            </div>
                        </div>
                        {/* Shipping Card */}
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Shipping</h2>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input type="radio" name="shipping" className="mr-2" />
                                    <label>Delivered by vendor (you)</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="shipping" className="mr-2" />
                                    <label>Delivered by AffluenceLink <span className="text-orange-500">(Unavailable)</span></label>
                                </div>
                            </div>
                        </div>
                        {/* Stock Status Card */}
                        <div className="shadow-lg p-4 rounded">
                            <h2 className="text-lg font-semibold mb-2">Stock status</h2>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input type="radio" name="stock" className="mr-2" />
                                    <label>In stock</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="stock" className="mr-2" />
                                    <label>Unavailable</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="stock" className="mr-2" />
                                    <label>To be announced</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6 shadow-lg p-4 rounded">
                    <button className="text-gray-500">Discard</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Add product</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductForm