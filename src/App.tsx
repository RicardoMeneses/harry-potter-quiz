import { useEffect, useState } from 'react';
import { Home } from './components/Home';
import { FaPlay } from 'react-icons/fa';
import dobby from './assets/dobby.jpeg';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const ALL_QUESTIONS: Question[] = [
  {
    question: '¿Qué casa de Hogwarts tiene como símbolo un león?',
    options: ['Slytherin', 'Ravenclaw', 'Gryffindor', 'Hufflepuff'],
    correct: 2,
  },
  {
    question: '¿Quién es el director de Hogwarts en la mayoría de la saga?',
    options: ['Severus Snape', 'Albus Dumbledore', 'Minerva McGonagall', 'Dolores Umbridge'],
    correct: 1,
  },
  {
    question: '¿Qué objeto permite viajar en el tiempo?',
    options: [
      'La Piedra de la Resurrección',
      'El Giratiempo',
      'La Capa de Invisibilidad',
      'La Varita de Saúco',
    ],
    correct: 1,
  },
  {
    question: '¿Cuál es el nombre completo de Voldemort?',
    options: ['Tom Marvolo Riddle', 'Tom Sorvolo Ryddle', 'Tom Elvis Riddle', 'Tom Morfin Riddle'],
    correct: 0,
  },
  {
    question: '¿Qué criatura protege el banco Gringotts?',
    options: ['Dragones', 'Dementores', 'Hipogrifos', 'Duendes'],
    correct: 0,
  },
  {
    question: '¿Cuál es el número de andén para llegar a Hogwarts?',
    options: ['Andén 8 y 3/4', 'Andén 9 y 3/4', 'Andén 10 y 1/2', 'Andén 7 y 1/2'],
    correct: 1,
  },
  {
    question: '¿Qué animal es Hedwig?',
    options: ['Una lechuza blanca', 'Un búho gris', 'Un halcón', 'Una lechuza marrón'],
    correct: 0,
  },
  {
    question: "¿Quién escribió 'Historia de Hogwarts'?",
    options: ['Hermione Granger', 'Rita Skeeter', 'Bathilda Bagshot', 'Gilderoy Lockhart'],
    correct: 2,
  },
  {
    question: '¿Cuál es el sortilegio para abrir cerraduras?',
    options: ['Colloportus', 'Alohomora', 'Bombarda', 'Reducto'],
    correct: 1,
  },
  {
    question: '¿Qué forma tiene el Patronus de Harry?',
    options: ['Un ciervo', 'Un perro', 'Una nutria', 'Un fénix'],
    correct: 0,
  },
  {
    question: '¿Qué posición juega Harry en el equipo de Quidditch?',
    options: ['Guardian', 'Cazador', 'Golpeador', 'Buscador'],
    correct: 3,
  },
  {
    question: '¿Cómo se llama el callejón donde los magos compran sus materiales?',
    options: ['Knockturn', 'Diagon', 'Godric', 'Privet'],
    correct: 1,
  },
  {
    question: '¿Cuál es el nombre del hipogrifo de Hagrid?',
    options: ['Buckbeak (Buck)', 'Fang', 'Norbert(a)', 'Aragog'],
    correct: 0,
  },
  {
    question: '¿Qué tipo de criatura es Dobby?',
    options: ['Elfo doméstico', 'Duende', 'Trasgo', 'Hombre lobo'],
    correct: 0,
  },
  {
    question: '¿Qué poción permite tomar la apariencia de otra persona?',
    options: ['Amortentia', 'Felix Felicis', 'Multijugos', 'Veritaserum'],
    correct: 2,
  },
  {
    question: '¿Cuál de estas es una Maldición Imperdonable?',
    options: ['Expelliarmus', 'Imperio', 'Stupefy', 'Accio'],
    correct: 1,
  },
  {
    question: '¿Cómo se llama el banco de los magos?',
    options: ['Ollivanders', 'Borgin & Burkes', 'Flourish and Blotts', 'Gringotts'],
    correct: 3,
  },
  {
    question: '¿Qué casa tiene como colores el verde y plata?',
    options: ['Hufflepuff', 'Ravenclaw', 'Slytherin', 'Gryffindor'],
    correct: 2,
  },
  {
    question: '¿Qué objeto sirve como entrada a la Sala Común de Gryffindor?',
    options: ['Un tapiz', 'Un retrato', 'Una estatua', 'Una puerta oculta'],
    correct: 1,
  },
  {
    question: '¿Cómo se llama el equipo nacional de Quidditch de Bulgaria donde juega Krum?',
    options: ['Durmstrang', 'Balkan Bats', 'Bulgaria', 'Vratsa Vultures'],
    correct: 2,
  },
  {
    question: '¿Qué animal simboliza Ravenclaw en los libros?',
    options: ['Águila', 'Cuervo', 'Lechuza', 'Fénix'],
    correct: 0,
  },
  {
    question: '¿Cuál es la varita más poderosa del mundo mágico?',
    options: ['Varita de Saúco', 'Varita de Espino', 'Varita de Acebo', 'Varita de Fresno'],
    correct: 0,
  },
  {
    question:
      '¿Cuál es la tercer Reliquia de la Muerte junto con la Varita de Saúco y la Piedra de la Resurrección?',
    options: ['El Guardapelo', 'La Capa de Invisibilidad', 'El Giratiempo', 'El Horrocrux'],
    correct: 1,
  },
  {
    question: '¿Cómo se llama la lechuza de Ron?',
    options: ['Errol', 'Pigwidgeon', 'Hedwig', 'Hermes'],
    correct: 1,
  },
  {
    question: '¿Qué objeto escoge al mago en Ollivanders?',
    options: ['El caldero', 'La túnica', 'La varita', 'El libro'],
    correct: 2,
  },
  {
    question: '¿Qué hechizo desarma al oponente?',
    options: ['Expelliarmus', 'Lumos', 'Obliviate', 'Riddikulus'],
    correct: 0,
  },
  {
    question: '¿Quién es el guardián de las llaves y terrenos de Hogwarts?',
    options: ['Argus Filch', 'Rubeus Hagrid', 'Filius Flitwick', 'Madam Hooch'],
    correct: 1,
  },
  {
    question: '¿Cómo se llama el mapa mágico que muestra a todos en Hogwarts?',
    options: [
      'El Mapa del Merodeador',
      'El Mapa de Hogwarts',
      'La Lista de Filch',
      'El Mapa de los Fundadores',
    ],
    correct: 0,
  },
  {
    question: '¿Quién mata a Dumbledore?',
    options: ['Voldemort', 'Draco Malfoy', 'Severus Snape', 'Bellatrix Lestrange'],
    correct: 2,
  },
  {
    question: '¿Qué mascota tiene Neville en los primeros libros?',
    options: ['Una rata', 'Un sapo', 'Un gato', 'Una lechuza'],
    correct: 1,
  },
  {
    question: '¿Cuál es el nombre del espejo que muestra el deseo más profundo?',
    options: ['Erised', 'Oculus', 'Veritas', 'Somnium'],
    correct: 0,
  },
  {
    question: '¿Qué ingrediente principal tiene la poción Felix Felicis?',
    options: ['No se revela', 'Piel de boomslang', 'Pluma de fénix', 'Sangre de unicornio'],
    correct: 0,
  },
  {
    question: '¿Qué animal es la mascota de Slytherin?',
    options: ['Serpiente', 'Tejón', 'León', 'Águila'],
    correct: 0,
  },
  {
    question: '¿Cómo se llama el barrio donde viven los Dursley?',
    options: ['Little Whinging', 'Godric’s Hollow', 'Ottery St Catchpole', 'Hogsmeade'],
    correct: 0,
  },
  {
    question: '¿Quién enseña Pociones en el primer año de Harry?',
    options: ['Severus Snape', 'Horace Slughorn', 'Remus Lupin', 'Quirinus Quirrell'],
    correct: 0,
  },
  {
    question: '¿Cuál es la palabra para encender la varita?',
    options: ['Nox', 'Lumos', 'Incendio', 'Aguamenti'],
    correct: 1,
  },
  {
    question: '¿Qué criatura es Aragog?',
    options: ['Acromántula', 'Basilisco', 'Thestral', 'Erkling'],
    correct: 0,
  },
  {
    question: '¿Quién es el Príncipe Mestizo?',
    options: ['Harry Potter', 'Severus Snape', 'Tom Riddle', 'Sirius Black'],
    correct: 1,
  },
  {
    question: '¿Cómo se llama la hermana de Ron?',
    options: ['Molly', 'Fleur', 'Ginny', 'Luna'],
    correct: 2,
  },
  {
    question: '¿Qué animal puede ver alguien que ha presenciado la muerte?',
    options: ['Thestral', 'Demiguise', 'Boggart', 'Kneazle'],
    correct: 0,
  },
  {
    question: '¿Cuál es el hechizo para repeler dementores?',
    options: ['Riddikulus', 'Protego Totalum', 'Expecto Patronum', 'Repello Dementum'],
    correct: 2,
  },
  {
    question: '¿Qué profesor es animago y se transforma en un gato?',
    options: ['McGonagall', 'Umbridge', 'Sprout', 'Trelawney'],
    correct: 0,
  },
  {
    question: '¿Qué objeto recibe Harry en su primer cumpleaños en Hogwarts?',
    options: ['Una Firebolt', 'Una Saeta de Fuego', 'Un recordador', 'Una Nimbus 2000'],
    correct: 3,
  },
  {
    question: '¿Cómo se llama la tienda de varitas famosa en el Callejón Diagon?',
    options: ['Ollivanders', 'Madam Malkin', 'Weasleys’ Wizard Wheezes', 'Florean Fortescue'],
    correct: 0,
  },
  {
    question: 'Cómo logra harry respirar bajo el agua en el torneo de los tres magos?',
    options: [
      'Se transforma en tiburón',
      'Con branquias de pez',
      'Con una burbuja de aire',
      'Besa a una sirena',
    ],
    correct: 1,
  },
  {
    question: '¿Que gemelo Weasley muere en la batalla de Hogwarts?',
    options: ['Fred', 'George', 'Ron', 'Percy'],
    correct: 0,
  },
  {
    question: '¿Cómo se llama a quienes no tienen habilidades mágicas?',
    options: ['Muggles', 'Squibs', 'No-Majs', 'Mudbloods'],
    correct: 0,
  },
  {
    question: '¿Qué criatura es capaz de transformarse en la persona que más temes?',
    options: ['Dementor', 'Thestral', 'Boggart', 'Acromántula'],
    correct: 2,
  },
  {
    question: '¿Qué hechizo se usa para hacer levitar objetos?',
    options: ['Alohomora', 'Wingardium Leviosa', 'Accio', 'Levioso'],
    correct: 1,
  },
  {
    question: '¿Quién mato a Sirius Black?',
    options: ['Lucius Malfoy', 'Bellatrix Lestrange', 'Severus Snape', 'Fenrir Greyback'],
    correct: 1,
  },
  {
    question: '¿Cómo se llama la gata de Argus Filch?',
    options: ['Crookshanks', 'Hedwig', 'Fluffy', 'Mrs. Norris'],
    correct: 3,
  },
];

const optionLabels = ['A', 'B', 'C', 'D'];

function shuffleArray<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const QUESTIONS_PER_GAME = 10;

function prepareRound(questions: Question[], count: number): Question[] {
  // 1) baraja las preguntas, 2) toma N, 3) baraja opciones manteniendo la respuesta correcta
  const picked = shuffleArray(questions).slice(0, Math.min(count, questions.length));
  return picked.map((q) => {
    const shuffledOptions = shuffleArray(q.options);
    const newCorrect = shuffledOptions.indexOf(q.options[q.correct]);
    return { ...q, options: shuffledOptions, correct: newCorrect };
  });
}

function App() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (started) {
      const round = prepareRound(ALL_QUESTIONS, QUESTIONS_PER_GAME);
      setQuestions(round);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setScore(0);
      setShowResult(false);
    }
  }, [started]);

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    const round = prepareRound(ALL_QUESTIONS, QUESTIONS_PER_GAME);
    setQuestions(round);
    setStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  const getResultMessage = (score: number): { title: string; message: string } => {
    if (score === 10) {
      return {
        title: 'Eres un verdadero mago! 🧙‍♂️',
        message:
          'Perfecto! Dumbledore estaría orgulloso. Claramente has leído los libros más veces que Hermione.',
      };
    } else if (score >= 8) {
      return {
        title: 'Excelente! ⚡',
        message:
          'Impresionante! Definitivamente mereces ser prefecto. Solo te faltó un poquito para ser perfecto.',
      };
    } else if (score >= 6) {
      return {
        title: 'Bien hecho! 📚',
        message: 'Nada mal, pero tal vez deberías pasar más tiempo en la biblioteca con Hermione.',
      };
    } else if (score >= 4) {
      return {
        title: 'Puedes mejorar! 🎓',
        message:
          'Mmm... parece que alguien necesita releer los libros. ¿O solo viste las películas?',
      };
    } else {
      return {
        title: 'Ups! 😅',
        message: '¿Seguro que eres fan de Harry Potter? Incluso un muggle sabría más. A estudiar!',
      };
    }
  };

  return (
    <>
      {started && questions.length > 0 ? (
        <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-fuchsia-900 flex items-center justify-center p-4'>
          <div className='w-full max-w-2xl'>
            {!showResult ? (
              <>
                <div className='bg-white rounded-3xl shadow-2xl p-8 relative'>
                  <div className='absolute -top-20 left-1/2 transform -translate-x-1/2'>
                    <div className='w-30 h-30 bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden'>
                      <img src={dobby} alt='Dobby' className='w-full h-full object-cover' />
                    </div>
                  </div>

                  <div className='mt-8 mb-8'>
                    <h2 className='text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8'>
                      {questions[currentQuestion].question}
                    </h2>
                  </div>

                  <div className='space-y-4'>
                    {questions[currentQuestion].options.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      const isCorrect = index === questions[currentQuestion].correct;
                      const showCorrect = selectedAnswer !== null && isCorrect;
                      const showIncorrect = selectedAnswer !== null && isSelected && !isCorrect;

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          disabled={selectedAnswer !== null}
                          className={`w-full flex items-center gap-4 p-5 rounded-2xl text-left font-semibold transition-all duration-300 transform hover:scale-102 ${
                            selectedAnswer === null
                              ? 'bg-blue-700 text-white hover:bg-blue-600'
                              : showCorrect
                              ? 'bg-green-500 text-white'
                              : showIncorrect
                              ? 'bg-red-500 text-white'
                              : 'bg-blue-700 text-white opacity-50'
                          }`}
                        >
                          <span className='w-10 h-10 flex items-center justify-center bg-white/20 rounded-full font-bold flex-shrink-0'>
                            {optionLabels[index]}
                          </span>
                          <span className='flex-1 text-2xl'>{option}</span>
                          {showCorrect && <span className='text-2xl'>✓</span>}
                          {showIncorrect && <span className='text-2xl'>✗</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-100 to-fuchsia-100 opacity-50' />

                <div className='relative z-10'>
                  <div className='mb-6'>
                    <h2 className='text-4xl md:text-5xl font-bold text-blue-900 mb-6'>
                      Quiz Completado!
                    </h2>
                    <div className='mb-6'>
                      <p className='text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600 mb-2'>
                        {score}/{questions.length}
                      </p>
                      <p className='text-gray-600 text-2xl'>respuestas correctas</p>
                    </div>
                    <p className='text-4xl text-blue-800 font-semibold'>
                      {getResultMessage(score).title}
                    </p>
                    <p className='text-2xl text-blue-800 font-semibold mb-8'>
                      {getResultMessage(score).message}
                    </p>
                    <button
                      onClick={resetQuiz}
                      className='inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white rounded-full font-bold hover:from-blue-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-105 shadow-lg'
                    >
                      <FaPlay className='w-5 h-5' />
                      Jugar de nuevo
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Home setStarted={setStarted} />
      )}
    </>
  );
}

export default App;
