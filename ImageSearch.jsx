import { useState } from "react"

export default function ImageSearch({ searchText, isDark, setIsDark}) {
  const html = document.querySelector("html")
  const [text, setText] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    searchText(text)
  }

  function handleClick() {
    if(isDark) {
      html.classList.add("dark")
    }else {
      html.classList.remove("dark")
    }

    setIsDark(!isDark)
  }

  return (
  <div className="flex items-center justify-between max-w-full mx-4 rounded overflow-hidden mb-6">
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold">light</span>
      <div onClick={handleClick} className="flex w-10 h-4 rounded-lg bg-slate-200 dark:justify-end">
        <div className="h-full w-4 bg-black dark:bg-white  rounded-full"></div>
      </div>
      <span className="text-lg font-bold">dark</span>
    </div>
    <form onSubmit={handleSubmit} className=" w-full max-w-sm">
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input value={text} onChange={e => setText(e.target.value)} className="dark:text-gray-300 border-none appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term" />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
          Search
        </button>
      </div>
    </form>
  </div>
  )
}