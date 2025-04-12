import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('section'); // Assuming hero section is the first section

    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      if (window.scrollY >= heroSection.offsetHeight) {
        navbar.classList.add('opacity-0'); // Fade out
        navbar.classList.remove('opacity-100'); // Ensure full opacity when visible
      } else {
        navbar.classList.remove('opacity-0'); // Remove fade
        navbar.classList.add('opacity-100'); // Make navbar fully visible
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white font-bmw">
      {/* Navbar */}
      <nav
        id="navbar"
        className="fixed top-0 w-full flex justify-between items-center p-4 bg-transparent bg-opacity-50 z-50 border border-t-0 border-l-0 border-r-0 transition-opacity duration-300 opacity-100"
      >
        <img src="/videos/logo1.png" alt="BMW logo" className="h-20" />
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-gray-400 transition">Models</li>
          <li className="hover:text-gray-400 transition">News</li>
          <li className="hover:text-gray-400 transition">Company</li>
          <li className="hover:text-gray-400 transition">Store</li>
        </ul>
      </nav>

      {/* Hero Section with Fade Effect */}
      <section className="w-screen h-screen relative">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover mask-gradient"
          src="/videos/bmwVid2.mp4"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-5xl font-bold uppercase transform -translate-y-12 animate-[fadeIn_3s_ease-out] flex items-center">
            BMW
            <img src="/videos/m3logo.png" alt="BMW M4 logo" className="h-23 ml-1 " />
          </h2>
          <p className="mt-4 text-lg max-w-2xl">
            Experience cutting-edge technology and car innovation like never before.
          </p>
        </div>
      </section>

      {/* Car Models Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Our Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl">
          {[
            {
              name: "M4",
              image:
                "/videos/bmw g81.png",
            },
            { name: "M5", image: "/videos/BMW X2.png" },
            { name: "M2", image: "/videos/bmw m2.png" },
          ].map((car) => (
            <div
            key={car.name}
            className="relative  p-6 rounded-lg transform transition hover:scale-105 hover:bg-white overflow-hidden border border-l-0 border-r-0 border-t-0 group"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white group-hover:text-black">
              {car.name}
            </h3>
            <button className="mt-2 text-sm text-black bg-white border border-black px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-black focus:outline-none">  
  Explore More →  
</button>  
          </div>
          

          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="p-8 bg-black border rounded-2xl">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Koenigsegg Jesko sets new speed record", image: "/news1.jpg" },
            { title: "Gemera – The future of Mega-GTs", image: "/news2.jpg" },
            { title: "Regera production comes to an end", image: "/news3.jpg" },
          ].map((news, index) => (
            <div key={index} className="bg-black p-4 rounded-lg hover:bg-white transition">
              <img
                src={news.image}
                alt={news.title}


                
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <button className="mt-2 text-sm text-black hover:text-black transition ">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-800 mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} BMW. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-2">
          <li className="hover:text-gray-400 transition">Privacy Policy</li>
          <li className="hover:text-gray-400 transition">Terms of Service</li>
          <li className="hover:text-gray-400 transition">Contact</li>
        </ul>
      </footer>

      {/* Custom Tailwind CSS for BMW Font & Mask Image */}
      <style>
        {`
          @font-face {
            font-family: 'BMW Type Next';
            src: url('/fonts/BMWTypeNext.woff2') format('woff2'),
                 url('/fonts/BMWTypeNext.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          .font-bmw {
            font-family: 'BMW Type Next', 'DIN', Arial, sans-serif;
          }

          .mask-gradient {
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
          }
        `}
      </style>
    </div>
  );
}
