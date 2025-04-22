import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Download, SlidersHorizontal } from 'lucide-react';

const BranchList = () => {
  // Dummy data for branches
  const branchesData = [
    {
      id: 2,
      branch: 'ABUJA I',
      chairman: 'SALAWE OBIANUJU BLESSING',
      proName: 'AMALA MUONWE',
      meetingDays: '3RD SUNDAY OF EVERY MONTH',
      meetingVenues: 'Nelseno Hotels, Wuse Zone 1, Abuja-FCT',
      time: '3:30 PM'
    },
    {
      id: 3,
      branch: 'AWKA',
      chairman: 'DR. CHINEDU K. NWANKWO (08066596696)',
      proName: 'MR. JASPER CHUKWURAH (08135084177)',
      meetingDays: 'LAST SUNDAY OF EVERY MONTH',
      meetingVenues: 'Dulce Fast Food (Former Thrillers beside Macdons), Aroma, Awka, Anambra State',
      time: '4:00 PM'
    },
    {
      id: 4,
      branch: 'ASABA',
      chairman: 'DR. DAVISON ORIAHI',
      proName: 'ANTHONY OROBO (+234 803 450 6478)',
      meetingDays: 'LAST SUNDAY OF EVERY MONTH',
      meetingVenues: 'Goldenland Hotel, Asaba, Delta State',
      time: '4:00 PM'
    },
    {
      id: 5,
      branch: 'BAYELSA',
      chairman: 'MR. MATTHEW AYIB AKARINAMINI NOAH',
      proName: 'OYEGHE EBIKIO MULUZIGHE',
      meetingDays: '2ND SUNDAY OF EVERY MONTH',
      meetingVenues: 'Tamara hall, along Otiotio road, Yenezue-gene, Yenagoa, Bayelsa State',
      time: '3:00 PM'
    },
    {
      id: 6,
      branch: 'CALABAR',
      chairman: 'ENGR EKENE IKEJI (Coordinator)',
      proName: 'OBED NKEMMADU',
      meetingDays: '1ST SUNDAY OF EVERY MONTH',
      meetingVenues: 'Big Munch, Ediba Road Close, Off Marian Market Walkover, Calabar, Cross River State',
      time: '5:00 PM'
    },
    {
      id: 7,
      branch: 'OAU/EKWULOBIA',
      chairman: 'OBIAGBAOSO C HUKWUEMEKA. O',
      proName: 'HON. IZUCHUKWU OKWUOGU',
      meetingDays: '1ST SUNDAY OF EVERY MONTH',
      meetingVenues: 'Orthon Palace hotel, Ekwulobia, Aguata-Anambra State',
      time: '3:00 PM'
    },
    {
      id: 8,
      branch: 'ENUGU',
      chairman: 'EZEANYA FREDERICK KABONGO.',
      proName: 'EMMANUEL NDUBUDE',
      meetingDays: '3RD SUNDAY OF EVERY MONTH',
      meetingVenues: 'Dragon Centre, 82 Division Enugu- Enugu State',
      time: '3:00 PM'
    },
    {
      id: 9,
      branch: 'IBADAN',
      chairman: 'CHINEDU EZENWOKIKE',
      proName: 'OBUM ONYENWE',
      meetingDays: '2ND SATURDAY OF EVERY MONTH',
      meetingVenues: 'GIANNI LOUNGE (PI HOSTEL), BODIJA, IBADAN, OYO STATE',
      time: '4:00 PM'
    },
    {
      id: 10,
      branch: 'LAGOS AMUWO',
      chairman: 'ENGR OSITA OGBAJI .C. (08036743164)',
      proName: 'BENSON EZEH (08137638377)',
      meetingDays: '1ST SATURDAY OF EVERY MONTH',
      meetingVenues: 'Royal Vintage Lounge, Agor-palace way, Okota Lagos',
      time: '4:00 PM'
    },
    {
      id: 11,
      branch: 'LAGOS ISLAND',
      chairman: 'THEO EGBUNIKE',
      proName: 'MICHALE',
      meetingDays: '2ND SATURDAY BIMONTHLY',
      meetingVenues: 'Officers Mess Bonny Camp, VICTORIA Island, Lagos',
      time: '3:00 PM'
    },
    {
      id: 12,
      branch: 'LAGOS MAINLAND',
      chairman: 'KENNETH KENECHUKWU OKOLI',
      proName: 'ESIAKA ROSITA CHINENYE (08063045451)',
      meetingDays: 'LAST SATURDAY OF THE MONTH',
      meetingVenues: 'Serena Hotel and Suites - 48, Asoge Street, Off Cele Bus/Stop, Okota/Itire Link Bridge (Ijesha Roundabout), Surulere, Lagos',
      time: '3:00 PM'
    },
    {
      id: 13,
      branch: 'NNEWI',
      chairman: 'CHIJIOKE OKEKE',
      proName: 'ANGELA OKORIE',
      meetingDays: '3RD THURSDAY OF EVERY MONTH',
      meetingVenues: 'Clinical building, NAUTH Old site, Nnewi, Anambra State',
      time: '3:00 PM'
    },
    {
      id: 14,
      branch: 'ONITSHA',
      chairman: 'ILUNO AMALACHUKWU',
      proName: 'OKUDO SYLVESTER',
      meetingDays: '3RD SUNDAY OF EVERY MONTH',
      meetingVenues: "WENDY'S PLACE beside CPS, Onitsha",
      time: '2:00 PM'
    },
    {
      id: 15,
      branch: 'OWERRI',
      chairman: 'ENGR. DR. ONYEBUCHI CHIKEZIE NOSIRI',
      proName: 'CHIMA UKADIKE',
      meetingDays: '3RD SUNDAY OF EVERY MONTH',
      meetingVenues: 'Owerri Sports Club, Owerri, Imo State',
      time: ''
    },
    {
      id: 16,
      branch: 'PORT HARCOURT',
      chairman: 'MUOJEKE MICHAEL OBUMNEME',
      proName: 'OKECHUKWU NWAMADI',
      meetingDays: '3RD SUNDAY EVERY MONTH',
      meetingVenues: "PEOPLE'S CLUB RUMOLA PH, RIVERS STATE",
      time: '3:00 PM'
    },
    {
      id: 17,
      branch: 'UK BRANCH',
      chairman: '',
      proName: '',
      meetingDays: '',
      meetingVenues: '',
      time: ''
    },
    {
      id: 18,
      branch: 'USA BRANCH',
      chairman: 'EUSTACE OBIAJULU DUNN',
      proName: '',
      meetingDays: '',
      meetingVenues: '412 KARUI CLIFFS ROAD, OWINGS MILL MD, USA',
      time: ''
    },
    {
      id: 19,
      branch: 'EUROPE',
      chairman: 'OBINNA NWANKWO',
      proName: '+4915 219606182',
      meetingDays: '',
      meetingVenues: 'GERMANY, EURPOE',
      time: 'Online',
    }
];

  const [branches, setBranches] = useState(branchesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setBranches(branchesData);
    } else {
      const filtered = branchesData.filter(
        branch => 
          branch.branch.toLowerCase().includes(query) ||
          branch.chairman.toLowerCase().includes(query) ||
          branch.proName.toLowerCase().includes(query) ||
          branch.meetingVenues.toLowerCase().includes(query)
      );
      setBranches(filtered);
    }
    setCurrentPage(1);
  };

  // Handle pagination
  const totalPages = Math.ceil(branches.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = branches.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle sorting
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }

    const sortedBranches = [...branches].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });

    setBranches(sortedBranches);
  };

  return (
    <div className="min-h-screen mb-10 py-8 px-4">
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
          <Link to="/directory" className="text-gray-600 hover:text-gray-900">
            Directory
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-800">Search for a Branch</span>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="relative w-full md:w-64 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              <span>Sort By</span>
            </button>
            <button className="flex items-center px-3 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              <Download className="h-4 w-4 mr-2" />
              <span>Download List</span>
            </button>
          </div>
        </div>

        <hr />

        {/* Table */}
        <div className="overflow-x-auto mt-6 bg-white border">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#030F27] text-white">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Branch Chairman
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Branch PRO's Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Monthly Meeting Days
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Meeting Venues
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((branch, index) => (
                <tr key={branch.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#EDF1F8]'} hover:bg-gray-100`}>
                  <td className="px-6 py-2 text-sm font-medium text-gray-900">
                    {branch.branch}
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-500">
                    {branch.chairman}
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-500">
                    {branch.proName}
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-500">
                    {branch.meetingDays}
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-500">
                    {branch.meetingVenues}
                  </td>
                  <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">
                    {branch.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {/* <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Total: {branches.length}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            {[...Array(Math.min(totalPages, 5)).keys()].map(i => {
              const pageNumber = i + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === pageNumber
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            
            {totalPages > 5 && (
              <>
                <span className="text-gray-500">...</span>
                <button
                  onClick={() => paginate(totalPages)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === totalPages
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}
            
            <button
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-2">
              {itemsPerPage} / page
            </span>
            <select
              className="border border-gray-300 rounded-md text-sm p-1"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={7}>7</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BranchList;