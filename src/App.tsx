import { Button } from "./components/ui/button"
import Question from "./home/Question"
import StartQuize from "./home/StartQuize"
import { useAppSelector } from "./redux/hooks/hooks"


function App() {
const {startQuize} = useAppSelector((state)=>state.quize)
  return (
    <>
     <div >
     {startQuize?<Question></Question>:<StartQuize></StartQuize>}
     {/* <Question></Question> */}
     </div>
    </>
  )
}

export default App
