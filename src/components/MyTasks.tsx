import { Task } from "./Tasks/Task";

export const MyTasks = () => {
  return (
    <>
      <div className="w-[550px] h-[450px] text-center bg-slate-500 rounded text-white">
        <h1 className="text-2xl mt-4">My Tasks</h1>
        <div className="mt-6 flex flex-col justify-center gap-2">
          <Task />
        </div>
      </div>
    </>
  );
};
