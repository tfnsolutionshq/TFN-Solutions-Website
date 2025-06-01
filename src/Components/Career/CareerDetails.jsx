"use client"

import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { MapPin, Briefcase, Calendar, ChevronLeft, Mail, ArrowRight, ExternalLink } from "lucide-react"
import { jobOpenings } from "./jobOpenings"

function CareerDetailsPage() {
  const { id } = useParams()
  const job = jobOpenings.find((job) => job.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!job) {
    return (
      <main className="bg-[var(--background-primary)] min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you are looking for does not exist or has been removed.</p>
          <Link
            to="/careers"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 mr-2" /> Back to Careers
          </Link>
        </div>
      </main>
    )
  }

  const renderHowToApply = () => {
    if (job.contactEmail && job.subjectLine) {
      // For Sales Manager - email application
      const mailtoLink = `mailto:${job.contactEmail}?subject=${encodeURIComponent(job.subjectLine)}`
      return (
        <div className="bg-[var(--background-primary)] rounded-lg p-6 border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Apply</h3>
          <p className="text-gray-700 mb-4">{job.howToApply}</p>
          <a
            href={mailtoLink}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Apply via Email
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      )
    } else if (job.note) {
      // For Backend Developer and Call Center Rep - website application
      return (
        <div className="bg-gray-50 rounded-lg p-6 border border-blue-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Apply</h3>
          <p className="text-gray-700 mb-4">{job.howToApply}</p>
          <div className="bg-blue-100 rounded-lg p-4 mb-4">
            <p className="text-blue-800 font-medium">{job.note}</p>
          </div>
          <a
            href="mailto:hr@tfnsolutions.us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Apply Here
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      )
    }
    return null
  }

  return (
    <main className="bg-[var(--background-primary)] min-h-screen">
      <section className="pt-32 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/careers"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to all jobs
            </Link>
          </motion.div>

          {/* Job Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
          >
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{job.title}</h1>
            <p className="text-lg text-blue-600 font-medium mb-6">
              {job.company} - {job.industry}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 " />
                <div>
                  <p className="font-medium text-[var(--text-primary)]">{job.location}</p>
                  <p className="text-sm text-[var--(text-secondary)]">Location</p>
                </div>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-medium text-[var(--text-primary)]">{job.engagement}</p>
                  <p className="text-sm text-[var--(text-secondary)]">Type</p>
                </div>
              </div>
              {/* <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{job.startDate}</p>
                  <p className="text-sm">Start Date</p>
                </div>
              </div> */}
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-medium text-[var(--text-primary)]">{job.applicationDeadline}</p>
                  <p className="text-sm text-[var--(text-secondary)]">Application Deadline</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Job Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-8"
          >
            {/* About Us */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">About Us</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{job.aboutUs}</p>
            </div>

            {/* Role Summary - only for Sales Manager */}
            {job.roleSummary && (
              <div>
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Role Summary</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">{job.roleSummary}</p>
              </div>
            )}

            {/* Responsibilities */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Responsibilities</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[var(--text-secondary)]">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[var(--text-secondary)]">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bonus Skills - only for Sales Manager */}
            {job.bonusSkills && job.bonusSkills.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Bonus Skills</h2>
                <ul className="space-y-2">
                  {job.bonusSkills.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What We Offer - only for Sales Manager */}
            {job.whatWeOffer && job.whatWeOffer.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h2>
                <ul className="space-y-2">
                  {job.whatWeOffer.map((offer, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How to Apply */}
            {renderHowToApply()}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default CareerDetailsPage
