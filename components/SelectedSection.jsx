import { BsArrowRightShort } from "react-icons/bs";
import TaskioCard from "./TaskioCard";
const SelectedSection = ({ taskios }) => {
  return (
    <section className="py-20 bg-background font-montserrat">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-around items-center font-bold sm:justify-between">
          <h1 className="text-xl sm:text-5xl">
            Seçilmiş <span className="text-secondary">Taskioçular</span>
          </h1>
          <button className="flex text-primary font-bold italic underline items-center">
            Daha çox
            <BsArrowRightShort className="text-2xl text-secondary ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10">
          {taskios.map((taskio) => (
            <TaskioCard key={taskio.id} taskio={taskio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedSection;
