import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { setStartQuize } from "@/redux/features/quize/quizeSlize";
import { useAppDispatch } from "@/redux/hooks/hooks";

const StartQuize = () => {
  const dispatch = useAppDispatch()
  
  return (
    <div className=" h-screen flex justify-center items-center">
      <Card className="w-[450px] lg:h-[350px] border-none shadow-none ">
       <CardHeader>
        <h1 className=" text-7xl text-center"> Join Quize</h1>
       </CardHeader>
      <CardContent className="space-y-3 justify-center h-full flex items-center  flex-col">
     <Button onClick={()=>dispatch(setStartQuize())} >Start Quize</Button>
      </CardContent>

    </Card>
    </div>
  );
};

export default StartQuize;