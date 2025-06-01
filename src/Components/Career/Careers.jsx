import { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { MapPin, Briefcase, Calendar, ArrowRight } from "lucide-react"
import { jobOpenings } from "./jobOpenings"

function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-[var(--background-primary)] min-h-screen">
      {/* Header Section */}
      <section className="pt-36 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-blue-600 font-medium mb-4">Join Our Team</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Career Opportunities</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover exciting roles at TFN Solutions and become part of a team dedicated to empowering through
              technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(text-primary)] mb-2">{job.title}</h3>
                    <p className="text-blue-600 font-medium mb-4">{job.industry}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-[var(--text-secondary)]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-g[var(--text-secondary)]" />
                        <span>{job.engagement}</span>
                      </div>
                      {/* <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{job.startDate}</span>
                      </div> */}
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-[var(--text-secondary)]" />
                        <span>{job.applicationDeadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Link
                      to={`/career-details/${job.id}`}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No jobs fallback */}
          {jobOpenings.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Open Positions</h3>
              <p className="text-gray-600">
                We don't have any open positions at the moment, but check back soon for new opportunities.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default CareersPage
