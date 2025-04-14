import { useEffect, useState } from 'react';

export default function HomePage() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleMouseEnter = (index) => {
    setPlayingVideo(index);
  };

  const handleMouseLeave = () => {
    setPlayingVideo(null);
  };

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('section');

    const handleScroll = () => {
      if (window.scrollY >= heroSection.offsetHeight) {
        navbar.classList.add('opacity-0');
        navbar.classList.remove('opacity-100');
      } else {
        navbar.classList.remove('opacity-0');
        navbar.classList.add('opacity-100');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white font-bmw overflow-x-hidden">
      <nav
  id="navbar"
  className="absolute top-0 w-full flex justify-between p-4 bg-transparent bg-opacity-50 z-50 border border-t-0 border-l-0 border-r-0 transition-opacity duration-300 opacity-100"
>
  <img src="/videos/logo1.png" alt="BMW logo" className="h-20" />
  <ul className="flex space-x-6 text-lg relative">
    {[
      { title: 'Models', items: ['i7', 'i7 M70', 'M2', 'X5'] },
      { title: 'News', items: ['Latest', 'Releases', 'Reviews'] },
      { title: 'Company', items: ['About Us', 'Careers', 'Sustainability'] },
      { title: 'Store', items: ['Accessories', 'Parts', 'Apparel'] },
    ].map((menu, i) => (
      <li key={i} className="group relative cursor-pointer">
        <span className="hover:text-gray-400 transition">{menu.title}</span>
        <div
          className={`absolute top-full left-0 bg-white text-black w-48 rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out translate-y-2 group-hover:translate-y-0 z-50 ${
            menu.title === 'Store' ? 'left-[-90px]' : '' // Move Store dropdown to the left
          }`}
        >
          {menu.items.map((item, j) => (
            <a key={j} href="#" className="block px-4 py-2 hover:bg-blue-950">
              {item}
            </a>
          ))}
        </div>
      </li>
    ))}
  </ul>
</nav>

      <section className="w-screen h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover mask-gradient"
          src="/videos/bmwVid2.mp4"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-5xl font-bold uppercase animate-[fadeIn_3s_ease-out] flex items-center translate-x-[-575px] translate-y-25">
            BMW
            <img src="/videos/bmwI.png" alt="BMW M4 logo" className="h-10 ml-1" />
          </h2>
          <p className="mt-4 text-lg max-w-2xl translate-x-[-330px] translate-y-30">
            Discover BMW electric cars like the iX and i7 M70, combining luxury, sustainability, and fast charging for an eco-friendly drive.
          </p>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Our BMW Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl">
          {[
            { name: 'i7', image: '/videos/i77.png' },
            { name: 'i7 m70', image: '/videos/i7.png' },
            { name: 'M2', image: '/videos/bmw m2.png' },
          ].map((car) => (
            <div
              key={car.name}
              className="relative p-6 rounded-lg transform transition hover:scale-105 hover:bg-white overflow-hidden border border-l-0 border-r-0 border-t-0"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-32 object-contain rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-white group-hover:text-black">{car.name}</h3>
              <button className="mt-2 text-sm text-black bg-white border border-black px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-black focus:outline-none">
                Explore More →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-black border rounded-2xl">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'BMW M5 Series - The Pinnacle of Power',
              image: '/videos/m555.png',
              video: '/videos/m5vv.mp4',
              description:
                'Experience the unrivaled performance of the BMW M5, blending extreme power with luxury in one seamless machine.',
            },
            {
              title: 'BMW M4 - Pure Driving Performance',
              image: '/videos/m43.png',
              video: '/videos/m4v.mp4',
              description:
                'The BMW M4 is designed for those who crave an exhilarating ride. With a refined design and powerful engine, it delivers an unforgettable driving experience.',
            },
            {
              title: 'BMW X5 - Bold, Intelligent, and Ready for Anything',
              image: '/videos/bmX5.png',
              video: '/videos/bmwX5.mp4',
              description:
                'The new BMW X5 redefines the luxury SUV with intelligent technology, powerful performance, and dynamic design that conquers both city streets and off-road adventures.',
            },
          ].map((news, index) => (
            <div
              key={index}
              className="relative bg-black p-4 rounded-lg transition duration-300 border border-gray-700 overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {playingVideo !== index && (
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}

              {playingVideo === index && (
                <video
                  className="w-full h-40 object-cover rounded-md mb-4"
                  src={news.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}

              <h3 className="text-lg font-semibold text-white">{news.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{news.description}</p>
              <button className="mt-2 text-sm text-white border border-white px-4 py-2 rounded-md transition duration-300 hover:bg-white hover:text-black">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center p-6 bg-white overflow-hidden">
        <p className="text-sm text-black">&copy; {new Date().getFullYear()} BMW. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-2">
          <li className="hover:text-gray-400 transition text-black">Privacy Policy</li>
          <li className="hover:text-gray-400 transition text-black">Terms of Service</li>
          <li className="hover:text-gray-400 transition text-black">Contact</li>
        </ul>
      </footer>

      <style>
        {`
           @font-face {
            font-family: 'Helvetica';
            font-weight: normal;
            font-style: normal;
          }

           .font-helvetica {
            font-family: 'Helvetica', Arial, sans-serif;
          }

          .mask-gradient {
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
          }

          body {
            overflow-x: hidden;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}
