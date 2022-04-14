import react, { useState } from "react"

const TodoList = () => {
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  const handleListUpdate = () => {
    setList([...list, userInput])
    setUserInput('')
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="border-b-2">
        <h1 className="text-3xl font-bold">List</h1>
      </div>
      <label className="block">
        <span className="block">
          Enter:
        </span>
        <input 
          className="border shadow-sm rounded px-2"
          placeholder="Write here" 
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)}
        />
      </label>
      <button
        onClick={handleListUpdate}
        className="rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none text-white w-24"
      >
        Add
      </button>
      {list.map((e, index) => <div key={index}>{e}</div>)}
    </div>
  )
}

export default TodoList