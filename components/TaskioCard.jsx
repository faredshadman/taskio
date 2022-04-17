import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const TaskioCard = ({ taskio }) => {
  return (
    <div className="bg-slate-50 p-4 pb-2 rounded-lg">
      <div className="flex border-b-2 border-slate-200 pb-2 space-x-6 items-center">
        <Image
          className="rounded-full"
          src={taskio.url}
          width={56}
          height={56}
          alt="taskio_worker_profile"
        />
        <div className="flex flex-col">
          <p className="font-bold text-lg text-primary">{taskio.name}</p>
          <span className="flex text-sm items-center">
            <AiFillStar className="text-yellow-400 mr-1" />
            <span className="mr-1">{taskio.stars}</span>
            Müsbət rəy
          </span>
        </div>
      </div>
      <div className="border-b-2 border-slate-200 pb-4">
        <span className="text-xs opacity-40">Əsas bacarıqlar:</span>
        <ul className="list-disc ml-6 font-medium space-y-1 marker:text-secondary marker:text-xl">
          {taskio.jobs.map((job, index) => (
            <li key={index}>
              <span className="flex font-medium text-sm items-center justify-between">
                {job[index].name}
                <span className="text-secondary font-extrabold">
                  {job[index].price} ₼
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-4">
        <span className="font-extrabold text-primary text-sm">Bioqrafiya:</span>
        <p className="py-2">{taskio.bio}</p>
      </div>
    </div>
  );
};

export default TaskioCard;
