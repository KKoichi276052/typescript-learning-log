import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";


function App() {
  const {name} = useAppSelector((state) => state.userState)
  return (
    <div className="">
      <h1 className="text-7xl font-bold ">App</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log('it worked')}
      >Hello
      </Button>
    </div>
  );

}
export default App;
