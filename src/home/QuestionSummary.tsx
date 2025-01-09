import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"
import { useAppSelector } from "@/redux/hooks/hooks";

const QuestionSummary = () => {
const {questions,userAnswers} = useAppSelector((state)=>state.quize)
console.log(questions,userAnswers)


const correctAnswerCount = userAnswers.reduce((count, answer, index) => {
  if (questions[index].correctAnswer === answer) {
    count++;
  }
  return count;
}, 0);

const percentCorrectAnswerCount = ((correctAnswerCount/questions.length)*100)

console.log(percentCorrectAnswerCount)
  return (
    <div className=" flex justify-center items-center h-screen">
      <Card className="w-[450px]">
      <CardHeader>
      Quize Summary
      </CardHeader>
      <CardContent>
      Correct Answer : 7/10
      <Progress value={13} />
      </CardContent>
      </Card>
    </div>
  );
};

export default QuestionSummary;