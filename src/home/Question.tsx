import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Question = () => {
  return (
    <div className=" flex h-screen justify-center items-center">
      <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>নাটক কম করো পিও’ এই সংলাপটি কোথায় শোনা হয়েছিল?</CardTitle>
        <CardDescription>you complete : 2/10</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 justify-center flex flex-col">
      <Button>কুমিল্লার এক কিশোরের মুখে</Button>
      <Button>কুমিল্লার এক কিশোরের মুখে</Button>
      <Button>কুমিল্লার এক কিশোরের মুখে</Button>
      <Button>কুমিল্লার এক কিশোরের মুখে</Button>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
    </div>
  );
};

export default Question;