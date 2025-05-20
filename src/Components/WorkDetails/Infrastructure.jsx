import Infrastructure1 from '../../assets/Images/Infrastructure.png'
import Infrastructure2 from '../../assets/Images/Infrastructure2.png'
import Infrastructure3 from '../../assets/Images/Infrastructure3.png'

const Infrastructure = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-40 pb-8">
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <div className="h-3 w-3 rounded-full bg-orange-500 mr-3"></div>
          <span className="text-sm font-medium uppercase tracking-wider">Project</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Infrastructure Service (Onsite)</h1>
      </div>

      <section className="mb-8">
        <img src={Infrastructure1} alt="Main Infrastructure" className="w-full h-auto rounded-lg mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={Infrastructure2} alt="Infrastructure Detail 1" className="w-full h-auto rounded-lg" />
          <img src={Infrastructure3} alt="Infrastructure Detail 2" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">What we did</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-600">Design & Deploy: Provision, configure, and maintain physical and virtual servers for optimal performance, uptime, and security.</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-600">Network Design & Implementation: End-to-end wired and wireless infrastructure design, tailored to your scale, industry, and goals.</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-600">Storage Solutions: Deploy scalable and secure SAN, NAS, or cloud storage systems for enterprise-grade file and backup management.</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-600">Virtualization (VMware, Hyper-V): Increase agility and reduce hardware costs with robust virtual machine and container orchestration.</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-600">IT Relocation Services: End-to-end management of server room or office IT relocation with minimal business disruption.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Infrastructure;