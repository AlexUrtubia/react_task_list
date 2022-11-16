import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useState, useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import EditIcon from "@mui/icons-material/Edit";
import useRemoveTodo from "../hooks/useRemoveTodo";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddForm from "./forms/AddForm";
import EditForm from "./forms/EditForm";

export default function Tareas() {

  const { estado, newForm, setNewForm, editForm, setEditForm, setTaskId } = useContext(TodoContext);
  const remove = useRemoveTodo();
  const [taskState, setTaskState] = useState(false);

  const handleNew = () => {
    setNewForm(true);
  };

  const handleEdit = (value) => {
    setEditForm(true);
		setTaskId(value)
  };

  if (estado.length === 0) {
    return (
      <div className="p-5 flex flex-col w-full h-full text-center justify-center">
        <span className="text-xl">Agrega una tarea</span>
        <div className="p-3 -mb-2 flex w-full h-full text-center justify-center">
				{ newForm ? null : (
				<button
            className="flex text-justify"
            onClick={() => {
							setNewForm(true);
						}}
          >
            <span className="self-center text-blue-400 hover:text-blue-300 hover:drop-shadow-xl">
              <AddBoxIcon sx={{ fontSize: 40 }} />
            </span>
          </button> )}
					{ newForm ? <AddForm /> : null }
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="p-3 -mb-2 flex w-full h-full text-center justify-center">
          { newForm || editForm ? null : (
            <button
              className="flex text-justify"
              onClick={() => {
                handleNew();
              }}
            >
              <span className="self-center text-blue-400 hover:text-blue-300 hover:drop-shadow-xl">
                <AddBoxIcon sx={{ fontSize: 40 }} />
              </span>
            </button>
          )}
        </div>

        { newForm ? <AddForm /> : null }
				{ editForm ? <EditForm /> : null }
        <div className="p-3 mt-3 flex w-full flex-col space-y-4">
          { estado.map((task) => (
            <li
              className="text-xl bg-bckg w-full justify-center flex border-slate-300 rounded-2xl relative	shadow"
              key={task.id}
            >
              <button
                className="flex absolute left-1 self-center"
                onClick={() => remove(task.id)}
              >
                <DeleteRoundedIcon className="text-red-500 hover:text-red-400 hover:drop-shadow-xl" />
              </button>
              <span className="title flex absolute mt-1">{task.title}</span>
              {task.completa ? (
                <span className="desc p-1 line-through">{task.descripcion}</span>
              ) : (
                <span className="desc p-1">{task.descripcion}</span>
              )}

              <button
                className="flex absolute top-1 right-1 text-justify"
                onMouseOver={() => {
                  setTaskState(task.completa);
                }}
                onClick={() => {
                  setTaskState((task.completa = !taskState));
                }}
              >
                {task.completa ? (
                  <TaskAltIcon className="text-green-500 hover:text-green-400 hover:drop-shadow-xl" />
                ) : (
                  <PendingActionsIcon className="text-yellow-500 hover:text-yellow-400 hover:drop-shadow-xl" />
                )}
              </button>
              <button
                className="flex absolute bottom-1 right-1"
                onClick={() => {
                  handleEdit(task.id);
                }}
              >
                <EditIcon className="text-blue-800 hover:text-blue-500 hover:drop-shadow-xl" />
              </button>
            </li>
          ))}
        </div>
      </>
    );
  }
}
