import { Link } from "react-router-dom";

const WorkDetails = () => {
  // Sample project data - replace with actual data or API call
  const projectData = {
    title: 'UNIZIK Alumni Website',
    image: '/src/assets/Images/image 8.png', // Using actual image from assets
    description: 'Experience the power of Mobile App Project Management and unlock the potential of your projects.',
    client: 'Nnamdi Azikiwe University',
    service: 'UI/UX, Software Development',
    tools: 'Illustrator, Figma',
    year: '2019',
    liveUrl: 'https://crystalbricks.ng/',
    detailedDescription: 'The UNIZIK Alumni Portal was developed to bridge the gap between graduates and their alma mater — Nnamdi Azikiwe University. It provides a modern digital experience that fosters networking, community engagement, and alumni support programs.',
    secondaryDescription: 'Cursus felis eget pulvinar aliquam ut laoreet nunc mattis sagittis urna lobortep diam et morbi vel eget arcu magna vel justo viverra a ante. Sagittis vitae vitae ultricies quis eu adipiscing fringillam volutpat massa maecenas ac urna sed elementum amet pharetra nisi tellus sodales sagittae sed elit. Ornare malesuada vel congue felis eget amet a lorem sed sed cursus elementum lectus vulputate.',
    projectHighlights: [
      "Digital alumni registration and profile management",
      "Real-time updates on events, news, and campaigns",
      "Donations and fundraising module integrated with secure payment gateways"
    ],
    achievements: [
      'Designed and developed a fully responsive portal tailored for alumni engagement',
      'Integrated secure payment systems for donations and event registration',
      'Built administrative tools for content updates, campaign management, and user analytics',
      'Delivered user-centric UI/UX to ensure accessibility and ease of use across devices',
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pt-40 pb-8">
      {/* Project Header */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <div className="h-3 w-3 rounded-full bg-orange-500 mr-3"></div>
          <span className="text-sm font-medium uppercase tracking-wider">Project</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{projectData.title}</h1>
      </div>
 
      {/* Project Content */}
      <div className="grid bg-white items-center p-2 rounded-xl grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
        {/* Project Image */}
        <div className="">
          <div className="rounded-lg overflow-hidden bg-gray-100 h-[250px] md:h-[350px]">
            {/* Fallback div with gradient if image is not available */}
            <div
              className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300"
              style={{
                backgroundImage: `url(${projectData.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>

        {/* Project Info */}
        <div className="">
          <div className="px-6 rounded-lg h-full">
            {/* <p className="text-gray-600 mb-4">{projectData.description}</p> */}

            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium">Client</span>
                <span className="text-gray-600">{projectData.client}</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium">Service</span>
                <span className="text-gray-600">{projectData.service}</span>
              </div>

              {/* <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium">Tools</span>
                <span className="text-gray-600">{projectData.tools}</span>
              </div> */}

              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium">Year</span>
                <span className="text-gray-600">{projectData.year}</span>
              </div>
            </div>

            <Link
              to={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition-colors duration-300"
            >
              <span>View Live</span>
              <div className="ml-2 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-16">
        <p className="text-gray-600 mb-8">{projectData.detailedDescription}</p>

        {/* Project Image - Secondary */}
        <div className="rounded-lg overflow-hidden bg-gray-100 h-[200px] md:h-[250px] mb-8">
          <div
            className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300"
            style={{
              backgroundImage: `url('/src/assets/Images/image 7.png')`, // Using actual image from assets
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        {/* Project Highlights as bullet points */}
        <h3 className="text-2xl font-bold mb-3">Project Highlights</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          {projectData.projectHighlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>

      {/* What We Did Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">What we did</h2>
        <ul className="space-y-4">
          {projectData.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
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
              <span className="text-gray-600">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkDetails;