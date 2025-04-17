import { Link } from 'react-router-dom';
import { Search, Users, CreditCard, LogIn, FileText } from 'lucide-react';

const AlumniDirectory = () => {

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-800">Directory</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center mb-12">What do you want to do today?</h1>

        {/* Grid of options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Search for a Branch */}
          <div className="bg-white p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Search for a Branch</h3>
          </div>

          {/* Alumni Executives */}
          <div className="bg-white p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Alumni Executives</h3>
          </div>

          {/* Alumni Members */}
          <div className="bg-white p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Alumni Members</h3>
          </div>

          {/* Donate */}
          <div className="bg-white p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Donate</h3>
          </div>

          {/* Portal Login */}
          <div className="bg-white p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <LogIn className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Portal Login</h3>
          </div>

          {/* Become a Member */}
          <div className="bg-white p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Become a Member</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;