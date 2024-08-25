import { FC, useCallback, useEffect, useState } from "react";
import apiClient from "../../../configs/axios";
import TasksRow from "./TasksRow";
import { useParams } from "react-router-dom";

interface Task {
  _id?: string;
  name?: string;
  isDone: boolean;
  start_date?: string;
  due_date?: string;
  description: string;
}

const TasksRender: FC = () => {
  const { workId } = useParams<{ workId: string }>();
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [changeTask, setChangeTask] = useState<boolean>(false);
  const [type, setType] = useState<boolean>(false); // false for pending, true for done
  const [filteredTasks, setFilteredTasks] = useState<Array<Task>>([]);

  const fetchTasks = useCallback(async () => {
    try {
      const response = await apiClient.get(`/tasks/all/${workId}`);
      if (response.status === 200) {
        setTasks(response.data.tasks);
      }
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  }, [workId]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks, changeTask]);

  useEffect(() => {
    setFilteredTasks(tasks.filter(task => task.isDone === type));
  }, [tasks, type]);

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="To do"
        defaultChecked={!type}
        onChange={() => setType(false)}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <TasksRow
              key={task._id || index}
              task={task}
              onChange={() => setChangeTask(!changeTask)}
            />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Done"
        defaultChecked={type}
        onChange={() => setType(true)}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <TasksRow
              key={task._id || index}
              task={task}
              onChange={() => setChangeTask(!changeTask)}
            />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TasksRender;
