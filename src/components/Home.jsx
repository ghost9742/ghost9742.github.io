import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='relative w-full h-screen bg-[#000000] overflow-hidden'>
      {/* Glitch Effects */}
      <div className='fixed inset-0 pointer-events-none'>
        {/* Grid overlay */}
        <div
          className='absolute inset-0 opacity-30 animate-grid-pulse'
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Scanline */}
        <div
          className='absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent opacity-50 animate-scan'
          style={{ boxShadow: "0 0 10px #ffd700" }}
        />

        {/* Glitch bars */}
        <div
          className='absolute left-0 w-full h-0.5 bg-[#ffd700] opacity-0 animate-glitch1 top-[20%]'
          style={{ boxShadow: "0 0 15px #ffd700" }}
        />
        <div
          className='absolute left-0 w-full h-0.5 bg-[#ffd700] opacity-0 animate-glitch2 top-[60%]'
          style={{ boxShadow: "0 0 15px #ffd700" }}
        />

        {/* Corner frames */}
        <div className='absolute top-5 left-5 w-24 h-24 border-2 border-[#ffd700]/30 border-r-0 border-b-0' />
        <div className='absolute top-5 right-5 w-24 h-24 border-2 border-[#ffd700]/30 border-l-0 border-b-0' />
        <div className='absolute bottom-5 left-5 w-24 h-24 border-2 border-[#ffd700]/30 border-r-0 border-t-0' />
        <div className='absolute bottom-5 right-5 w-24 h-24 border-2 border-[#ffd700]/30 border-l-0 border-t-0' />

        {/* Status dots */}
        <div className='absolute bottom-5 right-5 flex gap-2'>
          <div
            className='w-2 h-2 rounded-full bg-[#ffd700] animate-blink'
            style={{ boxShadow: "0 0 10px #ffd700" }}
          />
          <div
            className='w-2 h-2 rounded-full bg-[#ffd700] animate-blink'
            style={{ animationDelay: "0.5s", boxShadow: "0 0 10px #ffd700" }}
          />
          <div
            className='w-2 h-2 rounded-full bg-[#ffd700] animate-blink'
            style={{ animationDelay: "1s", boxShadow: "0 0 10px #ffd700" }}
          />
        </div>
      </div>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10'>
        <p className='text-[#00F0FF]'>Hi, my name is</p>
        <h1 className='cyberpunk-font text-4xl sm:text-7xl font-bold text-[#ffed00]'>
          Nemanja Milosavljevic.
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#00F0FF]'>
          I'm a Front-End Web Developer.
        </h2>
        <p className='text-[#00F0FF] py-4 max-w-[700px]'>
          Interested in working together? Let's have a talk.
        </p>
        <div>
          <Link to={"/work"} className='cyber-btn cyber-btn-glow'>
            View my Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
