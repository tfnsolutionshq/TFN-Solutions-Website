import { Home, ArrowRight, Calendar1 } from "lucide-react"
import { useState } from "react"
import DonationModal from "./DonationModal"

const DonationDetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Sample donation data
  const donationData = {
    title: "Udemba School Renovation",
    date: "June 12, 2024",
    image: "/placeholder.svg",
    closesIn: "23-06-23",
    totalContributions: "N891,900",
    totalParticipations: "1,900",
    description:
      "Dr. Rita Oji is a Nigerian and interestingly, one of Nnamdi Azikiwe University alumni who has attained success in her career as a in the department of computer science at Dartmouth. Nnamdi Azikiwe University alumni who has attained success in her career as a in the department of computer science at Dartmouth. Nnamdi Azikiwe University alumni who has attained success in her career as a in the department of computer science at Dartmouth. Azikiwe University alumni who has attained success in her career as a in the department of computer science at Dartmouth Azikiwe Uni",
  }

  // Sample donations list
  const donationsList = [
    { name: "Uche ThankGod", date: "April 14, 2024", amount: "N500,000.00" },
    { name: "Anonymous Participant", date: "April 14, 2024", amount: "" },
    { name: "Uche ThankGod", date: "April 14, 2024", amount: "" },
    { name: "Anonymous Participant", date: "April 14, 2024", amount: "" },
    { name: "Uche ThankGod", date: "April 14, 2024", amount: "" },
  ]

  // Sample recent donations
  const recentDonations = [
    {
      name: "Udemba School Renovation",
      date: "17 JUNE 2020",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(3).png?raw=true",
    },
    {
      name: "Udemba School Renovation",
      date: "17 JUNE 2020",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(4).png?raw=true",
    },
    {
      name: "Udemba School Renovation",
      date: "17 JUNE 2020",
      image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/programs/image%20(5).png?raw=true",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 py-8">
      {/* Navigation */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <a href="#" className="flex items-center hover:text-gray-700">
          <Home className="h-4 w-4 mr-1" />
          <span>Home</span>
        </a>
        <span className="mx-2">&gt;</span>
        <a href="#" className="hover:text-gray-700">
          Donate
        </a>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">Fundraisers</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{donationData.title}</h1>
        <div className="mt-4 md:mt-0">
          <div className="w-full md:w-96 h-0.5 bg-[#D15300]"></div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-between mt-3 text-[#D15300] font-medium"
          >
            <span>DONATE HERE</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Full-width Project Image */}
      <div className="w-full h-96 bg-gray-200 mb-6">
        <img
          src={donationData.image || "/placeholder.svg"}
          alt={donationData.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Left Column - Description and Donation List */}
        <div className="lg:col-span-2">
          {/* Project Details */}
          <div className="mb-8 ">
            <div className="flex items-center mb-2">
              <Calendar1 className="mr-2 text-gray-500" />
              <span className="text-sm text-gray-500">Posted: {donationData.date}</span>
            </div>
            <p className="text- text-gray-700 mb-4">{donationData.description}</p>
            <a href="#" className="text-[#D85E00] text-sm">
              See More
            </a>
          </div>

          {/* Donation List */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Donation List</h2>
              <a href="#" className="text-[#D85E00] text-sm flex items-center">
                <span>SEE ALL</span>
              </a>
            </div>

            <div className="overflow-x-auto bg-gray-50 p-4">
              <table className="min-w-full">
                <tbody className="">
                  {donationsList.map((donation, index) => (
                    <tr key={index} className="border-b mb-4 border-gray-100 gap-12">
                      <td className="py-3 text-sm bg-white px-3 ">{donation.name}</td> 
                      <td className="py-3 text-sm bg-white px-3 text-gray-500">{donation.date}</td>
                      <td className="py-3 text-sm bg-white px-3 text-green-600">{donation.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-sm mt-12 text-gray-700 font-medium">
            <p className="mb-2">For enquiries, reach out to:</p>
            <p className="mb-2">Hotline: +2348096468647</p>
            <p>Whatsapp: +2348988839130</p>
          </div>
        </div>

        {/* Right Column - Stats and Recent Donations */}
        <div className="lg:col-span-1">
          {/* Stats */}
          <div className="bg-gray-50 rounded-md border border-gray-200 p-4 mb-6">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
              <span className="text-sm">Closes In</span>
              <span className="font-medium bg-[#EDEBEE] p-1 rounded">{donationData.closesIn}</span>
            </div>
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
              <span className="text-sm">Total Contributions</span>
              <span className="font-medium">{donationData.totalContributions}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm">Total Participations</span>
              <span className="font-medium">{donationData.totalParticipations}</span>
            </div>
            <div className="w-full h-0.5 bg-[#D15300] mt-6"></div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-between text-[#D85E00] font-medium mt-4"
            >
              <span>DONATE HERE</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>

          {/* Recent Donations */}
          <div>
            <h3 className="font-medium mb-4">RECENT DONATIONS</h3>
            <div className="space-y-4">
              {recentDonations.map((donation, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-16 h-16 overflow-hidden">
                    <img
                      src={donation.image || "/placeholder.svg"}
                      alt={donation.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{donation.name}</h4>
                    <p className="text-sm text-gray-500">{donation.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default DonationDetailPage
