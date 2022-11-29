import {
  Divider,
  Typography,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormHelperText,
  List,
  ListItem,
} from '@mui/material'
import { useState, React } from 'react'
import Footer from '../../../components/assist/footer'
import SidebarContent from '../../../components/sidebarContent'
import Exercicio1 from '../../../components/assets/exercicio1.png'
import Exercicio2 from '../../../components/assets/exercicio2.png'
import Exercicio3 from '../../../components/assets/exercicio3.png'
import Exercicio4 from '../../../components/assets/exercicio4.png'
import Exercicio5 from '../../../components/assets/exercicio5.png'
import QuizImage from '../../../components/assets/quizImage.png'

const Lesson3 = () => {
  const [showResults, setShowResults] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const questions = [
    {
      text: 'A que palavra a imagem se refere?',
      image: Exercicio1,
      options: [
        { id: 0, text: 'Bola', isCorrect: true },
        { id: 1, text: 'Bolo', isCorrect: false },
        { id: 2, text: 'Bala', isCorrect: false },
        { id: 3, text: 'Bexiga', isCorrect: false },
      ],
    },
    {
      text: 'A que palavra a imagem se refere?',
      image: Exercicio2,
      options: [
        { id: 0, text: 'Carro', isCorrect: true },
        { id: 1, text: 'Caro', isCorrect: false },
        { id: 2, text: 'Cacau', isCorrect: false },
        { id: 3, text: 'Carru', isCorrect: false },
      ],
    },
    {
      text: 'A que palavra a imagem se refere?',
      image: Exercicio3,
      options: [
        { id: 0, text: 'Mel', isCorrect: true },
        { id: 1, text: 'Mau', isCorrect: false },
        { id: 2, text: 'Mes', isCorrect: false },
        { id: 3, text: 'Mas', isCorrect: false },
      ],
    },
    {
      text: 'A que palavra a imagem se refere?',
      image: Exercicio4,
      options: [
        { id: 0, text: 'Porto', isCorrect: false },
        { id: 1, text: 'Porta', isCorrect: true },
        { id: 2, text: 'Pomba', isCorrect: false },
        { id: 3, text: 'Palio', isCorrect: false },
      ],
    },
    {
      text: 'A que palavra a imagem se refere?',
      image: Exercicio5,
      options: [
        { id: 0, text: 'Copa', isCorrect: false },
        { id: 1, text: 'Corpo', isCorrect: false },
        { id: 2, text: 'Copo', isCorrect: true },
        { id: 3, text: 'Capo', isCorrect: false },
      ],
    },

    {
      text: 'Selecione a maneira correta de formar a frase em libras,frase: Meu amigo viajou para São Paulo',

      options: [
        {
          id: 0,
          text: 'Homem meu amigo viajar cidade São Paulo',
          isCorrect: false,
        },
        {
          id: 1,
          text: 'Amigo homem meu Viajar São Paulo cidade .',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Amigo homem meu cidade São Paulo Viajar.',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'Viajar cidade São Paulo meu amigo homem',
          isCorrect: false,
        },
      ],
    },

    {
      text: 'Selecione a maneira correta de formar a frase em libras,frase: A professora comprou um livro.',

      options: [
        {
          id: 0,
          text: 'Professora mulher livro comprar',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'Mulher professora livro comprar .',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Livro comprar mulher professora',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'Comprar livro mulher professora',
          isCorrect: false,
        },
      ],
    },

    {
      text: 'Selecione a maneira correta de formar a frase em libras,frase: Hoje vou à casa da minha mãe.',
      options: [
        {
          id: 0,
          text: 'Hoje casa mulher benção ir',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'Hoje mulher casa benção ir',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Mulher hoje casa benção ir',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'Hoje casa benção casa ir',
          isCorrect: false,
        },
      ],
    },

    {
      text: 'Selecione a maneira correta de formar a frase em libras,frase: A criança tem um cachorro.',
      options: [
        {
          id: 0,
          text: 'Cachorro criança ter',
          isCorrect: false,
        },
        {
          id: 1,
          text: 'Ter cachorro criança',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Criança cachorro ter.',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'Cachorro ter criança',
          isCorrect: false,
        },
      ],
    },

    {
      text: 'Selecione a maneira correta de formar a frase em libras, frase:O gato pegou o rato.',
      options: [
        {
          id: 0,
          text: 'Pegar rato gato',
          isCorrect: false,
        },
        {
          id: 1,
          text: 'Rato gato pegar',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Pegar rato gato.',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'Gato rato pegar',
          isCorrect: true,
        },
      ],
    },
  ]

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }
  const restartGame = () => {
    setScore(0)
    setCurrentQuestion(0)
    setShowResults(false)
  }
  return (
    <>
      <SidebarContent />
      <Box
        display="flex"
        justifyContent="center"
        height="100%"
        marginLeft="240px"
        marginTop="20px"
        flexDirection="column"
        marginBottom="160px"
      >
        <Typography variant="h2">Vamos a Pratica!</Typography>
        <h1>Escolha a resposta correta</h1>

        {/* 2. Current Score  */}
        <h2>Acertos: {score}</h2>

        {/* 3. Show results or show the question game  */}
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <h1>Resultado final</h1>
            <h2>
              {score} de {questions.length} corretas - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Jogar Novamente</button>
          </div>
        ) : (
          /* 5. Question Card  */
          <Box className="question-card">
            {/* Current Question  */}
            <h2>
              Pergunta: {currentQuestion + 1} de {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>

            <div className="question-text">
              <img src={questions[currentQuestion].image} />
            </div>

            {/* List of possible answers  */}
            <Box display="flex" justifyContent="center" padding="20px">
              <List>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <ListItem
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      {option.text}
                    </ListItem>
                  )
                })}
              </List>
            </Box>
          </Box>
        )}
      </Box>

      <Footer />
    </>
  )
}

export default Lesson3
