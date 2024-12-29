import React, { useState } from "react";

export default function New() {
  const [newTask, setNewtask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (newTask) {
      setAllTasks([...allTasks, newTask]);
      setNewtask("");
    }
  };

  const handleEdit = (index) => {
    setEditId(index);
    setEditText(allTasks[index]);
  };
  const handleSave = (index) => {
    const updatedTasks = allTasks.map((task, i) => (i === index ? editText : task));
    setAllTasks(updatedTasks);
    setEditId(null);
    setEditText("");
  };
  const handleDelete=(index)=>{
    const deleteitem=allTasks.filter((_,i)=>i!==index)
    setAllTasks(deleteitem);
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-white shadow-lg p-10">
        <h1 className="text-2xl font-semibold text-center">Add new</h1>
        <div className="flex gap-3">
          <input
            className="py-2 px-3 border-2  bg-slate-100 "
            placeholder="task"
            onChange={(e) => setNewtask(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white rounded-md px-3 py-2"
          >
            Add
          </button>
        </div>

        <div className="mt-4">
          {allTasks.map((item, index) => (
            <div className="flex gap-2" key={index}>
              {editId == index ? (
                <input
                  className="py-2 px-3 border-2  bg-slate-100 "
                  placeholder="task"
                 value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <div className="py-2 px-3 border-2  text-black bg-slate-100 mt-2 w-full">
                  {item}
                </div>
              )}

              {editId == index ? (
                <button
                className="bg-green-500 px-3 text-white rounded-md"
                onClick={() => handleSave(index)}
              >
                Save
              </button>
              ) : (
                <>
                   <button
                    className="bg-yellow-500 px-3 text-white rounded-md"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-3 text-white rounded-md"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
