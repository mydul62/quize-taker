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
    <div className="flex justify-center items-center h-screen">
    <Card className="w-[450px]">
      <CardHeader>
        <h2 className="text-xl font-semibold">Quiz Summary</h2>
      </CardHeader>
      <CardContent>
        <p className="text-lg">
          Total Questions: <strong>{questions.length}</strong>
        </p>
        <p className="text-lg">
          Correct Answers: <strong>{correctAnswerCount}</strong>
        </p>
        <p className="text-lg">
          Incorrect Answers: <strong>{questions.length - correctAnswerCount}</strong>
        </p>
        <p className="text-lg">
          Percentage: <strong>{percentCorrectAnswerCount}%</strong>
        </p>
        <Progress value={percentCorrectAnswerCount}  />
  
        <div className="mt-4">
          {percentCorrectAnswerCount === 100 ? (
            <p className="text-green-500 font-medium">
              Excellent! You got everything correct. Keep it up!
            </p>
          ) : percentCorrectAnswerCount >= 75 ? (
            <p className="text-blue-500 font-medium">
              Great job! You did really well.
            </p>
          ) : percentCorrectAnswerCount >= 50 ? (
            <p className="text-yellow-500 font-medium">
              Good effort! Keep practicing to improve.
            </p>
          ) : (
            <p className="text-red-500 font-medium">
              Don't worry! Review and try again. You’ll get better!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  </div>
  
  );
};

export default QuestionSummary;