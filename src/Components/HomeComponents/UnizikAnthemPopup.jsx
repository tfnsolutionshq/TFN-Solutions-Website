"use client"

import { useState, useRef, useEffect } from "react"
import { X, Play, Pause, FileText, Download } from "lucide-react"

const UnizikAnthemPopup = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showLyrics, setShowLyrics] = useState(false)
  const audioRef = useRef(null)
  const progressBarRef = useRef(null)

  // Handle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Update progress bar as audio plays
  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime
    const duration = audioRef.current.duration || 0
    setCurrentTime(currentTime)
    setDuration(duration)
  }

  // Handle click on progress bar
  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current
    const rect = progressBar.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / progressBar.offsetWidth
    audioRef.current.currentTime = pos * audioRef.current.duration
  }

  // Format time in MM:SS
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Toggle lyrics display
  const toggleLyrics = () => {
    setShowLyrics(!showLyrics)
  }

  // Handle download
  const handleDownload = () => {
    // In a real implementation, this would trigger a download of the audio file
    console.log("Download audio file")
  }

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  // Close popup when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  // Stop scrolling on body when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg bg-white mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="p-6">
          {/* Title */}
          <h2 className="text-lg font-semibold mb-4">Unizik Anthem</h2>

          {/* Audio element (hidden) */}
          <audio
            ref={audioRef}
            src="/unizik-anthem.mp3" // Replace with actual audio file path
            onTimeUpdate={updateProgress}
            onLoadedMetadata={updateProgress}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Audio player controls */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              {/* Play/Pause button */}
              <button onClick={togglePlayPause} className="mr-2" aria-label={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              {/* Progress bar */}
              <div
                ref={progressBarRef}
                className="flex-grow h-1 bg-gray-200 rounded-full cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-[#D85E00] rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>

              {/* Time display */}
              <span className="ml-2 text-sm text-gray-600">{formatTime(currentTime)}</span>
            </div>

            {/* Control buttons */}
            <div className="flex justify-center space-x-6 mt-4 border-t border-gray-100 pt-4">
              <button
                onClick={togglePlayPause}
                className="flex items-center text-sm text-gray-700 hover:text-[#D85E00]"
              >
                {isPlaying ? (
                  <>
                    <Pause size={16} className="mr-1" /> Pause
                  </>
                ) : (
                  <>
                    <Play size={16} className="mr-1" /> Play
                  </>
                )}
              </button>

              <button
                onClick={toggleLyrics}
                className={`flex items-center text-sm ${
                  showLyrics ? "text-[#D85E00]" : "text-gray-700 hover:text-[#D85E00]"
                }`}
              >
                <FileText size={16} className="mr-1" /> Lyrics
              </button>

              <button onClick={handleDownload} className="flex items-center text-sm text-gray-700 hover:text-[#D85E00]">
                <Download size={16} className="mr-1" /> Download Audio
              </button>
            </div>
          </div>

          {/* Lyrics section (conditionally rendered) */}
          {showLyrics && (
            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <div className="max-h-80 overflow-y-auto px-4">
                <p className="font-medium mb-4">Hail! UNIZIK!</p>

                <p className="mb-1">Pride of the State and our Nation</p>
                <p className="mb-1">Fountain of knowledge and of Wisdom</p>
                <p className="mb-1">Source of our Hope and Confidence</p>
                <p className="mb-1">Where Freedom through Education we gain</p>
                <p className="mb-4">With reverence, we honour you</p>

                <p className="font-medium mb-2">REFRAIN</p>
                <p className="mb-1">Our UNIZIK! Our UNIZIK</p>
                <p className="mb-1">Here we learn</p>
                <p className="mb-1">Discipline, Self-Reliance and Excellence</p>
                <p className="mb-1">Great UNIZIK</p>
                <p className="mb-1">We do hail you</p>
                <p className="mb-4">We do hail you.</p>

                <p className="font-medium mb-2">Hail! UNIZIK!</p>
                <p className="mb-1">Seat of Science and Centre for the Arts</p>
                <p className="mb-1">Where knowledge in abundance flows</p>
                <p className="mb-1">Your name and virtue, with pride we uphold</p>
                <p className="mb-1">For through this varsity, our intellect blossoms</p>
                <p className="mb-4">With reverence, we honour you.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UnizikAnthemPopup
