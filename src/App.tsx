import { AnimatePresence } from 'framer-motion'
import { DecorativeLayer } from './components/DecorativeLayer'
import { useQuizEngine } from './hooks/useQuizEngine'
import { GameOverScreen } from './screens/GameOverScreen'
import { LandingScreen } from './screens/LandingScreen'
import { QuizScreen } from './screens/QuizScreen'
import { RegistrationScreen } from './screens/RegistrationScreen'
import { ResultScreen } from './screens/ResultScreen'

function App() {
  const quiz = useQuizEngine()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream text-brown">
      <DecorativeLayer />
      <AnimatePresence mode="wait">
        {quiz.screen === 'landing' ? <LandingScreen key="landing" onStart={quiz.startRegistration} /> : null}

        {quiz.screen === 'registration' ? (
          <RegistrationScreen key="registration" onSubmit={quiz.startQuiz} onBack={quiz.backHome} />
        ) : null}

        {quiz.screen === 'quiz' && quiz.currentQuestion ? (
          <QuizScreen
            key="quiz"
            player={quiz.player}
            question={quiz.currentQuestion}
            currentIndex={quiz.currentQuestionIndex}
            totalQuestions={quiz.questions.length}
            onAnswer={quiz.submitAnswer}
            onTimeout={quiz.failByTimeout}
          />
        ) : null}

        {quiz.screen === 'gameOver' && quiz.failedQuestionNumber ? (
          <GameOverScreen
            key="game-over"
            player={quiz.player}
            failedQuestionNumber={quiz.failedQuestionNumber}
            onRetry={quiz.retryQuiz}
            onHome={quiz.backHome}
          />
        ) : null}

        {quiz.screen === 'result' ? (
          <ResultScreen
            key="result"
            player={quiz.player}
            totalScore={quiz.totalScore}
            result={quiz.result}
            onHome={quiz.backHome}
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default App
