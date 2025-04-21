import { Home, Rss, Facebook, Twitter, Instagram, Calendar } from "lucide-react"

const NewsDetailPage = () => {
  // Sample news article data
  const article = {
    title: "Alumni Reunion Reboot 2.0 (Lagos Chapter)",
    image:
      "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
    postedDate: "June 17, 2024",
    content:
      "Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies: The Important factor to bear in mind Post Graduate Studies.",
  }

  // Sample recent news data
  const recentNews = [
    {
      id: 1,
      title: "Tips: How to secure Transcript for Int'l Purpose",
      date: "17 JUNE 2020",
      image:
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
    },
    {
      id: 2,
      title: "Post Graduate Studies: The Important factor to bear in mind",
      date: "17 JUNE 2020",
      image:
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
    },
    {
      id: 3,
      title: "Unizik Renovation Project on the Library unit",
      date: "17 JUNE 2020",
      image:
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
    },
    {
      id: 4,
      title: "Masters Application is now open for all interested candidates",
      date: "17 JUNE 2020",
      image:
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
    },
    {
      id: 5,
      title: "New Vice Chancellor Inaugurated on the new session",
      date: "17 JUNE 2020",
      image:
        "https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/Frame%204.png?raw=true",
    },
  ]

  return (
    <div className="min-h-screen bg-white mb-24">
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 mt-3 sm:px-0 lg:px-0 py-4">
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
          <span className="text-gray-900">Info</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-0 mt-3 lg:px-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-0">{article.title}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 mr-2">Follow to stay updated:</span>
            <a href="#" className="bg-[#F26522] text-white p-1.5 rounded-sm hover:opacity-90" aria-label="RSS Feed">
              <Rss className="h-4 w-4" />
            </a>
            <a href="#" className="bg-[#3b5998] text-white p-1.5 rounded-sm hover:opacity-90" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="bg-[#1DA1F2] text-white p-1.5 rounded-sm hover:opacity-90" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="bg-[#E4405F] text-white p-1.5 rounded-sm hover:opacity-90" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Article Content */}
          <div className="lg:col-span-2">
            {/* Article Image */}
            <div className="w-full aspect-video mb-6 overflow-hidden">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Posted Date */}
            <div className="flex items-center mb-4">
              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-500">Posted on: {article.postedDate}</span>
            </div>

            {/* Article Content */}
            <div className="space-y-4">
              <p className="text-gray-700">{article.content}</p>
              <p className="text-gray-700">{article.content}</p>
              <p className="text-gray-700">{article.content}</p>
              <p className="text-gray-700">{article.content}</p>
              <p className="text-gray-700">{article.content}</p>
              <p className="text-gray-700">{article.content}</p>
              <p className="text-gray-700">{article.content}</p>
              <p className="text-gray-700">{article.content}</p>
            </div>
          </div>

          {/* Right Column - Recent News */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <h2 className="text-lg font-bold mb-6">RECENT NEWS</h2>
              <div className="space-y-4">
                {recentNews.map((item) => (
                  <a key={item.id} href="#" className="flex items-start space-x-3 group">
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden ">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm group-hover:text-[#D85E00] transition-colors">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetailPage
