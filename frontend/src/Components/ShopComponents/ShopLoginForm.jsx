import React from 'react'

function ShopLoginForm() {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-green-50 flex items-center justify-center min-h-screen">
             <div className="bg-gradient-to-r from-black to-gray-900 rounded-lg shadow-lg p-3 flex flex-col md:flex-row items-center" style={{height: "40em", width:"80em"}}>
                    <div className="flex-1 flex justify-center">
                        <img src="https://placehold.co/150x150" alt="Laptop with user icon" className="w-48 h-48" />
                    </div>
                    <div className="flex-1 mt-8 mr-10 md:mt-0 md:ml-8">
                        <h2 className="text-3xl text-white font-bold mb-20 text-center">SHOP LOGIN</h2>
                        <form className="space-y-4">
                            <div className="relative">
                                <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                                <input type="email" placeholder="Email" className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                            </div>
                            <div className="relative">
                                <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
                                <input type="password" placeholder="Password" className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                            </div>
                            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">LOGIN</button>
                        </form>
                        <div className="text-center mt-4">
                            <a href="#" className="text-gray-500 hover:underline">Forgot Username / Password?</a>
                        </div>
                        <div className="text-center mt-4">
                            <a href="#" className="text-gray-500 hover:underline">Create your Account →</a>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default ShopLoginForm