import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <img src="images/cat.jpeg" className="h-24 mx-auto rounded-full" alt="Profile" />
            </div>
            <div className="text-center mt-5">
              <h1 className="text-4xl font-bold text-gray-800">Wildanf</h1>
              <p className="text-sm text-gray-600 mt-2">Web Developer</p>
            </div>
            <div className="mt-6">
              <ul className="flex justify-center space-x-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
