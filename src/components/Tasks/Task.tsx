import { tasks } from "../../data/tasks";

export const Task = () => {
  return (
    <div className=" flex flex-col gap-4 justify-between items-start px-10 ">
      {tasks.map((task) => (
        <div key={task.id} className="w-full flex flex-row justify-between">
          <span>{task.task}</span>

          <div className="flex flex-row gap-4">
            <button className="text-blue-600 bg-white p-1 rounded">
              Editar
            </button>
            <button className="text-white bg-red-500 p-1 rounded">
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
