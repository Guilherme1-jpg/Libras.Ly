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
import LessonImage from '../../../components/assets/lesson7Image.png'
import LessonImage2 from '../../../components/assets/lesson7Image2.png'
import LessonImage3 from '../../../components/assets/lesson7Image3.png'

const Lesson7 = () => {
  const [showResults, setShowResults] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const questions = [
    {
      text: 'Quando devemos utilizar números cardinais?',
      options: [
        {
          id: 0,
          text: 'Para indicar a frequência de uma ação',
          isCorrect: false,
        },
        { id: 1, text: 'Para indicar quantidades', isCorrect: false },
        {
          id: 2,
          text: 'Para indicar sinalizar/referenciar algo, como números telefônicos',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'Para indicar um privilégio, como ser segundo em uma fila',
          isCorrect: false,
        },
      ],
    },
    {
      text: 'A imagem abaixo se refere a um dos grupos de números ordinais, qual é esse grupo?',
      image: LessonImage,
      options: [
        { id: 0, text: 'Ordinal Fixo', isCorrect: false },
        { id: 1, text: 'Ordinal Não Fixo', isCorrect: false },
        { id: 2, text: 'Ordinal Vantagem', isCorrect: false },
        { id: 3, text: 'Ordinal Frequência', isCorrect: true },
      ],
    },
    {
      text: 'A imagem abaixo se refere a um dos grupos de números ordinais, qual é esse grupo?',
      options: [
        { id: 0, text: 'Ordinal Fixo', isCorrect: false },
        { id: 1, text: 'Ordinal Não Fixo', isCorrect: false },
        { id: 2, text: 'Ordinal Vantagem', isCorrect: true },
        { id: 3, text: 'Ordinal Frequência', isCorrect: false },
      ],
    },
    {
      text: 'A imagem abaixo se refere a um dos grupos de números ordinais, qual é esse grupo?',
      image: LessonImage2,
      options: [
        { id: 0, text: 'Ordinal Fixo', isCorrect: false },
        { id: 1, text: 'Ordinal Não Fixo', isCorrect: true },
        { id: 2, text: 'Ordinal Vantagem ', isCorrect: false },
        { id: 3, text: 'Ordinal Frequência', isCorrect: false },
      ],
    },
    {
      text: 'A imagem abaixo se refere a um dos grupos de números ordinais, qual é esse grupo?',
      image: LessonImage3,
      options: [
        { id: 0, text: 'Ordinal Fixo', isCorrect: true },
        { id: 1, text: 'Ordinal Não Fixo', isCorrect: false },
        { id: 2, text: 'Ordinal Vantagem ', isCorrect: false },
        { id: 3, text: 'Ordinal Frequência', isCorrect: false },
      ],
    },

    {
      text: 'Número quantitativo servem para indicar:',
      options: [
        {
          id: 0,
          text: 'Ordem',
          isCorrect: false,
        },
        {
          id: 1,
          text: 'Quantidade',
          isCorrect: true,
        },
        {
          id: 2,
          text: 'Vantagem',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'Frequência',
          isCorrect: false,
        },
      ],
    },

    {
      text: 'O formato de horas em libras é sinalizado em:',

      options: [
        {
          id: 0,
          text: 'Ciclos de doze horas, acompanhados dos sinais manhã e noite',
          isCorrect: false,
        },
        {
          id: 1,
          text: 'Ciclos de doze horas, acompanhados dos sinais manhã, tarde e noite.',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Ciclos de doze horas, acompanhados dos sinais manhã, tarde, noite e madrugada',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'Ciclos de doze horas, acompanhados dos sinais manhã, tarde e madrugada',
          isCorrect: false,
        },
      ],
    },

    {
      text: 'Ao sinalizar numerais, a palma da mão deve:',

      options: [
        {
          id: 0,
          text: 'Estar virada para cima',
          isCorrect: false,
        },
        {
          id: 1,
          text: 'Estar virada para o receptor',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Estar virada para baixo',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'Estar virada para o emissor',
          isCorrect: true,
        },
      ],
    },

    {
      text: 'Numerais ordinais são utilizados para sinalizar:',
      options: [
        {
          id: 0,
          text: 'sequência, hierarquia e posição',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'quantidade, hierarquia e posição',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'vantagem, hierarquia e posição',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'sequência, frequência e posição',
          isCorrect: false,
        },

        {
          id: 4,
          text: 'sequência, frequência e vantagem',
          isCorrect: false,
        },
      ],
    },

    {
      text: 'A imagem abaixo mostra o sinal de um número:',
      options: [
        {
          id: 0,
          text: 'Cardinal',
          isCorrect: false,
        },
        {
          id: 1,
          text: 'Ordinal Fixo',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Quantitativo',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'Ordinal Não Fixo',
          isCorrect: false,
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
            <Box display="flex" justifyContent="center" padding="10px">
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
    </>
  )
}

export default Lesson7
