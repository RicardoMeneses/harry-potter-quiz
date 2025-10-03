import { FaPlay } from 'react-icons/fa';

export const Home = ({
  setStarted,
}: {
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className='min-h-screen flex items-center justify-center p-4 relative overflow-hidden'
      style={{
        backgroundImage: 'url("/castle.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/70' />

      {/* Magical particles effect */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      <div className='relative z-10 text-center max-w-3xl mx-auto'>
        <h1 className='text-7xl md:text-8xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 drop-shadow-lg'>
          Harry Potter
        </h1>

        <h2 className='text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg'>
          Quiz Mágico
        </h2>

        <p className='text-2xl md:text-3xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed'>
          ¿Cuánto sabes sobre el mundo mágico de Harry Potter? Pon a prueba tus conocimientos con 10
          preguntas sobre la saga.
        </p>

        <button
          onClick={() => setStarted(true)}
          className='group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white text-xl font-bold rounded-full hover:from-yellow-700 hover:to-yellow-900 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-500/50'
        >
          <FaPlay className='w-6 h-6 group-hover:translate-x-1 transition-transform' />
          Comenzar Quiz
        </button>
      </div>
    </div>
  );
};
