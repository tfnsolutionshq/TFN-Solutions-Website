const PresidentMessage = () => {
    return (
      
      <>
        <main className=" bg-[#FFFAF5]">
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white  overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            {/* President's Image */}
            <div className="p-6 md:p-10">
              <div className="aspect-square md:aspect-auto md:h-full relative overflow-hidden">
                <img src="https://github.com/tfnsolutionshq/Unizik-Alumni-Assets/blob/main/percent.png?raw=true" alt="Dr Ikechukwu Innocent Umeh" className="w-full h-full object-cover" />
              </div>
            </div>
  
            {/* President's Message */}
            <div className="p-6 md:p-10">
              <div className="inline-block text-sm text-[#D85E00] mb-2 bg-[#FFF4ED] py-1 px-2 rounded-md">Message From the President</div>
  
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Dr Ikechukwu Innocent Umeh</h2>
  
              <p className="font-medium mb-4">Fellow Alumni,</p>
  
              <div className="space-y-4 text-gray-700">
                <p>
                  As we begin this new year, I want to express my heartfelt gratitude to each and every one of you for
                  being part of the great UNIZIK Alumni family. It is an honor to serve as your President, and I am
                  committed to working tirelessly to promote the interests of our alma mater and our alumni community.
                </p>
  
                <p>
                  In the coming year, we will continue to work towards strengthening our network, promoting academic
                  excellence, and supporting the growth and development of our alma mater. We will also explore new
                  opportunities for collaboration, professional development, and community service.
                </p>
  
                <p>
                  Together, let us keep the UNIZIK spirit alive and make our alma mater proud! Thank you, and may God bless
                  UNIZIK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </main>
      </>
    )
  }
  
  export default PresidentMessage
  