
const ImageGallery = () => {
  return (
    <div className="w-full bg-[#F7F7F7] mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First image - programmer with code overlay */}
        <div className="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-64 group">
          <img 
            src="/src/assets/Images/image 2.png" 
            alt="Programmer with code overlay" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Second image - team working on computers */}
        <div className="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-64 group">
          <img 
            src="/src/assets/Images/image 3.png" 
            alt="Team working on computers" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Third image - woman with sticky notes */}
        <div className="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-64 group">
          <img 
            src="/src/assets/Images/diverse.png" 
            alt="Woman with sticky notes" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;