import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

type Filter = "all" | "active" | "completed";

type Task = {
  _id?: string;
  description?: string;
  isCompleted: boolean;
  createdAt?: string;
};

interface TasksContextData {
  tasks: Task[];
  getTasks: (type: Filter) => Promise<void>;
  getActiveTasks: () => Promise<void>;
  getCompletedTasks: () => Promise<void>;
  createTask: (data: Task) => Promise<void>;
  updateTask: (data: Task) => Promise<void>;
  deleteTask: (_id: string) => Promise<void>;
  deleteAllCompletedTask: () => Promise<void>;
  filter: Filter;
}

interface TasksProviderProps {
  children: ReactNode;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  async function getTasks(value: Filter) {
    // GET /tasks?complete=true

    setFilter(value);

    const filter = {} as {
      complete?: boolean;
    };

    if (value === "active") {
      filter.complete = false;
    }
    if (value === "completed") {
      filter.complete = true;
    }

    const response = await api.get("/tasks/listAll", {
      params: filter,
    });

    const tasksList = response.data;

    setTasks(tasksList);
  }

  async function getActiveTasks() {
    const response = await api.get("/tasks/listAll", {
      params: {
        complete: false,
      },
    });
    // const response = await api.get("/tasks/listActive");

    const tasksList = response.data;

    setTasks(tasksList);
  }

  async function getCompletedTasks() {
    const response = await api.get("/tasks/listAll", {
      params: {
        complete: true,
      },
    });
    // const response = await api.get("/tasks/listCompleted");

    const tasksList = response.data;

    setTasks(tasksList);
  }

  async function createTask(taskData: Task) {
    const response = await api.post("/tasks/create", {
      ...taskData,
      createdAt: new Date(),
    });

    const { data: newTask } = response;

    setTasks([...tasks, newTask]);
  }

  async function updateTask(data: Task) {
    const response = await api.put("/tasks/update", data);

    const { data: updatedTask } = response;

    const updatedTasks = tasks.map((data) =>
      data._id === updatedTask._id ? updatedTask : data
    );

    setTasks(updatedTasks);
  }

  async function deleteTask(_id: string) {
    await api.post("/tasks/delete", { _id });

    const newTasksArray = tasks.filter((task) => task._id !== _id);

    setTasks(newTasksArray);
  }

  async function deleteAllCompletedTask() {
    await api.post("/tasks/deleteCompleted");

    getTasks("all");
  }

  useEffect(() => {
    getTasks("all");
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
        getTasks,
        getActiveTasks,
        getCompletedTasks,
        deleteAllCompletedTask,
        filter,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}
