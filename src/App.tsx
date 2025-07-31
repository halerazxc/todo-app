import { Button } from "./components/ui/button";
import { useNavigate } from "react-router";

function App() {

  const navigate = useNavigate()

  const buttonsTitle = [
    "Exercise",
    "Read books",
    "Meditate",
    "Plan meals",
    "Water plants",
    "Journal",
    "Stretch for 15 mins",
    "Review goals before",
  ];

  return (
    <>
      <div className="h-screen mx-auto flex items-center justify-center">
        <div className="w-[500px] h-[1000px] bg-image relative  py-[26px]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-center">
              <h1 className="text-[40px] font-semibold px-[16px] text-black absolute top-1/3 leading-12">
                Pick some new <br /> habits to get started
              </h1>
            </div>
            <div className="px-[38px] relative">
              <h1 className="text-[#D1A28B] text-[12px] font-semibold">
                RECOMMENDED
              </h1>
              <div className="flex flex-wrap gap-3 pt-[16px]">
                {buttonsTitle.map((label, index) => (
                  <Button className="bg-[#F3EFEE] hover:bg-gray-200 text-black">
                    {label}
                  </Button>
                ))}
              </div>
              <Button
                onClick={() => navigate('/home')}
                className="w-full flex mx-auto mt-[34px] py-[20px]"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
