import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const [tasks, setTasks] = useState<Record<string, string[]>>({});
  const [inputCategory, setInputCategory] = useState("");

  const addTask = () => {
    const trimmedCategory = inputCategory.trim().toLowerCase();
    const trimmedTask = inputValue.trim();

    if (!trimmedTask || !trimmedCategory) return;

    setTasks((prev) => ({
      ...prev,
      [trimmedCategory]: [...(prev[trimmedCategory] || []), trimmedTask],
    }));

    setInputValue("");
    setInputCategory("");
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen mx-auto flex items-center justify-center">
        <div className="w-[430px] h-[932px] border border-gray-300 rounded-xl  relative  py-[26px]">
          <FaArrowRightToBracket
            onClick={() => navigate("/")}
            className="absolute top-[20px] right-[20px] text-[20px] cursor-pointer"
          />
          <div className="flex flex-col justify-between h-full">
            <div className=" px-[38px]">
              <h1 className="text-[36px] text-black font-bold">Today</h1>

              {Object.keys(tasks).length === 0 ||
                Object.values(tasks).every(
                  (taskList) => taskList.length === 0
                ) ? (
                <div className="text-center text-gray-600 text-xl mt-10 italic">
                  Your To-Do list is empty. Time to plan something awesome 🚀
                </div>
              ) : (
                Object.entries(tasks).map(([category, taskList]) => (
                  <div key={category} className="mt-[32px]">
                    <h1 className="text-[#D1A28B] text-[12px] font-semibold uppercase">
                      {category}
                    </h1>
                    <div className="flex flex-col gap-3 pt-[16px] w-full">
                      {taskList.map((task, index) => (
                        <div
                          key={index}
                          className="flex flex-row gap-[16px] bg-[#F3EFEE] w-full p-[16px] rounded-md"
                        >
                          <Checkbox id={`${category}-${index}`} />
                          <Label htmlFor={`${category}-${index}`}>{task}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="px-[22px] flex items-center gap-[10px]">
              <Dialog>
                <form className="w-full">
                  <DialogTrigger asChild>
                    <Button className="w-full" variant="outline">
                      Add Todo List
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Create task</DialogTitle>
                      <DialogDescription>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Facilis, quam.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Category</Label>
                        <Input
                          required
                          id="category"
                          placeholder="For example: Design"
                          value={inputCategory}
                          onChange={(e) => setInputCategory(e.target.value)}
                        />
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="username-1">Name task</Label>
                        <Input
                          required
                          id="username-1"
                          name="username"
                          placeholder="For example: Make design"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") addTask();
                          }}
                          className="py-[20px]"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button className="cursor-pointer" variant="outline">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button
                        className="cursor-pointer"
                        onClick={addTask}
                        type="submit"
                      >
                        Save changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
