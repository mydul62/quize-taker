import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { nextQuestion, previousQuestion, setAnswers } from "@/redux/features/quize/quizeSlize";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useDispatch } from "react-redux";

const Question = () => {
const {questions,currentQuestionIndex,userAnswers} = useAppSelector((state)=>state.quize);
const dispatch = useDispatch()

const currentQuesation = questions[currentQuestionIndex]
const selectedAns = userAnswers[currentQuestionIndex]


  return (
    <div className=" flex h-screen justify-center items-center">
      <Card className="w-[450px] ">
      <CardHeader>
        <CardTitle>{currentQuesation.question}</CardTitle>
        <CardDescription>Question No :{currentQuestionIndex+1} /{questions?.length}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 justify-center flex flex-col">
      {currentQuesation?.options?.map((item,i)=>(
      <Button variant={selectedAns===item?'default':'outline'} onClick={()=>dispatch(setAnswers({currentQuestionIndex,item}))} key={i} >{item}</Button>
      ))}

      </CardContent>
      <CardFooter className="flex justify-between">
        <Button disabled={currentQuestionIndex === 0}  onClick={() => dispatch(previousQuestion())} variant="outline">Previous</Button>
        <Button  disabled={currentQuestionIndex === questions.length - 1} onClick={() => dispatch(nextQuestion())} >Next</Button>
      </CardFooter>
    </Card>
    </div>
  );
};

export default Question;