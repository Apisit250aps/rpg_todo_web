import { FC } from "react";

interface TaskFormProps {
  name?: string;
  setName?: (value: string) => void;
  desc?: string;
  setDesc?: (value: string) => void;
  diff?: string;
  setDiff?: (value: string) => void;
  start?: string;
  setStart?: (value: string) => void;
  due?: string;
  setDue?: (value: string) => void;
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const TaskForm: FC<TaskFormProps> = ({
  name = "",
  setName,
  desc = "",
  setDesc,
  diff = "",
  setDiff,
  start = "",
  setStart,
  due = "",
  setDue,
  handleSubmit,
}) => {
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      {setName && (
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full mb-3"
          value={name}
          onChange={(e) => setName?.(e.target.value)}
        />
      )}
      {setDesc && (
        <textarea
          className="textarea textarea-bordered w-full mb-3"
          placeholder="Descriptions"
          value={desc}
          onChange={(e) => setDesc?.(e.target.value)}
        ></textarea>
      )}
      {setDiff && (
        <select
          className="select select-bordered w-full mb-3"
          value={diff}
          onChange={(e) => setDiff?.(e.target.value)}
        >
          <option value="1">Easy</option>
          <option value="2">Medium</option>
          <option value="3">Hard</option>
        </select>
      )}
      {setStart && (
        <label className="input input-bordered mb-3 flex items-center gap-2">
          Start
          <input
            type="date"
            className="grow"
            value={start}
            onChange={(e) => setStart?.(e.target.value)}
          />
        </label>
      )}
      {setDue && (
        <label className="input input-bordered mb-3 flex items-center gap-2">
          Due
          <input
            type="date"
            className="grow"
            value={due}
            onChange={(e) => setDue?.(e.target.value)}
          />
        </label>
      )}
      <button type="submit" className="btn">
        Create
      </button>
    </form>
  );
};

export default TaskForm;
