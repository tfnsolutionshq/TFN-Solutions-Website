import { Home, Rss, Facebook, Twitter, Instagram } from "lucide-react"

const MemberDetailPage = () => {
  // Sample member data
  const member = {
    name: "Christy C. Agim",
    image: "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/alumniImages/image%20(14).png?raw=true",
    yearOfEntry: "Unknown",
    courseOfStudy: "Computer Science",
    career: "Computer Science Professor",
    chapter: "Lagos",
    positionHeld: "Secretary General",
    bio: "Christy C. Agim is a Nigerian and, interestingly, one of Nnamdi Azikiwe University alumni who has attained success in her career as a computer scientist. She is an internationally acclaimed expert in persuasive technology and behavioral change systems precisely in the department of computer science at Dalhousie University, Canada.",
    extendedBio: [
      "Rita was born to Mr. and Mrs. Maria and Chereoke Oji in Ozeh village, Enugu State, Nigeria. She grew up in her remote hometown, where she did not have any access to a computer. After her primary and secondary education, she got admitted to study Computer Science at Nnamdi Azikiwe University. Although Rita's parents never attended any school, it seems like brilliance runs in their bloodstream. This is evident when Rita graduated with First Class Honours, an uncommon feat that earned her several awards and scholarships.",
      "Rita's passion for ensuring that women have total access to education birthed Education for Women and the Less Privileged in Nigeria, a non-profit organization that provides scholarships and educates women in education. Rita has a long list of awards and honors, which she has earned over the course of her career.",
    ],
    socialLinks: {
      rss: "#",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="max-w-6xl mx-auto mt-4 px-6 sm:px-0 lg:px-0 py-4">
        <nav className="flex items-center text-sm text-gray-500">
          <a href="#" className="flex items-center hover:text-gray-700">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </a>
          <span className="mx-2">&gt;</span>
          <a href="#" className="hover:text-gray-700">
            Directory
          </a>
          <span className="mx-2">&gt;</span>
          <a href="#" className="hover:text-gray-700">
            Alumni Executives
          </a>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">{member.name}</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-0 lg:px-0 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Image */}
          <div className="md:col-span-1">
            <div className="bg-gray-100 rounded-full overflow-hidden aspect-square max-w-xs mx-auto">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - Member Details */}
          <div className="md:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 sm:mb-0">{member.name}</h1>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 mr-2">Connect:</span>
                <a
                  href={member.socialLinks.rss}
                  className="bg-[#F26522] text-white p-1.5 rounded-sm hover:opacity-90"
                  aria-label="RSS Feed"
                >
                  <Rss className="h-4 w-4" />
                </a>
                <a
                  href={member.socialLinks.facebook}
                  className="bg-[#3b5998] text-white p-1.5 rounded-sm hover:opacity-90"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={member.socialLinks.twitter}
                  className="bg-[#1DA1F2] text-white p-1.5 rounded-sm hover:opacity-90"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={member.socialLinks.instagram}
                  className="bg-[#E4405F] text-white p-1.5 rounded-sm hover:opacity-90"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Member Information */}
            <div className="bg-[#F6F6F6] p-6 mb-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <span className="font-medium">Year of Entry/Graduation:</span> {member.yearOfEntry}
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <span className="font-medium">Course of Study:</span> {member.courseOfStudy}
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <span className="font-medium">Career:</span> {member.career}
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <span className="font-medium">Chapter:</span> {member.chapter}
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <div>
                    <span className="font-medium">Position Held:</span> {member.positionHeld}
                  </div>
                </li>
              </ul>
            </div>
            <div className="my-4">
              <button className="text-gray-500 bg-[#F4F4F4] border border-gray-300 rounded-sm px-4 py-1 text-sm">BIO</button>
            </div>
            {/* Biography */}
            <div className="space-y-4">
              <p className="text-gray-700">{member.bio}</p>
              {member.extendedBio.map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
              
              <p className="text-gray-700">
                <a href="#" className="text-[#D85E00]">
                  See less
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberDetailPage
