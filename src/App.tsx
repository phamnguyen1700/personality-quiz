import { AnimatePresence } from "framer-motion";
import { DecorativeLayer } from "./components/DecorativeLayer";
import { useQuizEngine } from "./hooks/useQuizEngine";
import { AvatarScreen } from "./screens/AvatarScreen";
import { GameOverScreen } from "./screens/GameOverScreen";
import { LandingScreen } from "./screens/LandingScreen";
import { NameScreen } from "./screens/NameScreen";
import { PhotoScreen } from "./screens/PhotoScreen";
import { QuizScreen } from "./screens/QuizScreen";
import { ReadyScreen } from "./screens/ReadyScreen";
import { ResultScreen } from "./screens/ResultScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";

function App() {
  const quiz = useQuizEngine();

  return (
    <div className="muda-app relative min-h-screen overflow-x-hidden text-white">
      <DecorativeLayer />
      <AnimatePresence mode="wait">
        {quiz.screen === "landing" ? <LandingScreen key="landing" onStart={quiz.startWelcome} /> : null}

        {quiz.screen === "welcome" ? <WelcomeScreen key="welcome" onContinue={quiz.continueToName} /> : null}

        {quiz.screen === "name" ? <NameScreen key="name" onSubmit={quiz.submitName} /> : null}

        {quiz.screen === "photo" ? <PhotoScreen key="photo" onSubmit={quiz.submitPhoto} /> : null}

        {quiz.screen === "ready" ? <ReadyScreen key="ready" onStart={quiz.startQuiz} /> : null}

        {quiz.screen === "quiz" && quiz.currentQuestion ? (
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

        {quiz.screen === "gameOver" && quiz.failedQuestionNumber ? (
          <GameOverScreen
            key="game-over"
            player={quiz.player}
            failedQuestionNumber={quiz.failedQuestionNumber}
            onRetry={quiz.retryQuiz}
            onHome={quiz.backHome}
          />
        ) : null}

        {quiz.screen === "result" ? (
          <ResultScreen
            key="result"
            player={quiz.player}
            totalScore={quiz.totalScore}
            result={quiz.result}
            onAvatar={quiz.showAvatar}
          />
        ) : null}

        {quiz.screen === "avatar" ? <AvatarScreen key="avatar" player={quiz.player} result={quiz.result} /> : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
