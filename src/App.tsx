
import Question from "./home/Question"
import QuestionSummary from "./home/QuestionSummary"
import StartQuize from "./home/StartQuize"
import { useAppSelector } from "./redux/hooks/hooks"


function App() {
const {startQuize,quizeComplete} = useAppSelector((state)=>state.quize);
  return (
    <>
    <div>
  {quizeComplete ? (
    <QuestionSummary />
  ) : startQuize ? (
    <Question />
  ) : (
    <StartQuize />
  )}
</div>
    </>
  )
}

export default App
