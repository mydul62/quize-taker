import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { setStartQuize } from "@/redux/features/quize/quizeSlize";
import { useAppDispatch } from "@/redux/hooks/hooks";

const StartQuize = () => {
  const dispatch = useAppDispatch()
  
  return (
    <div className=" h-screen flex justify-center items-center">
      <Card className="w-[450px] lg:h-[350px] ">
      
      <CardContent className="space-y-3 justify-center h-full flex items-center  flex-col">
     <Button onClick={()=>dispatch(setStartQuize())} >Start Quize</Button>
      </CardContent>

    </Card>
    </div>
  );
};

export default StartQuize;