import { Button } from "@/components/ui/button";
import { nextQuestion, previousQuestion, setQuizeComplete } from "@/redux/features/quize/quizeSlize";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useDispatch } from "react-redux";
const QuestionControl = () => {
  const {questions,currentQuestionIndex} = useAppSelector((state)=>state.quize);
  const dispatch = useDispatch()
 console.log(questions.length )
  return (
    <div className="flex justify-between">
      <Button disabled={currentQuestionIndex === 0}  onClick={() => dispatch(previousQuestion())} variant="outline">Previous</Button>
     {(currentQuestionIndex !== questions.length-1)? <Button  disabled={currentQuestionIndex === questions.length} onClick={() => dispatch(nextQuestion())} >Next</Button>: <Button onClick={()=>dispatch(setQuizeComplete())} >Complete</Button>}
     
      
    </div>
  );
};

export default QuestionControl;