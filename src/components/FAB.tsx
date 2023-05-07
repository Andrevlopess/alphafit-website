import { BsMoonStars, BsSun } from "react-icons/bs"

export default function FAB() {

    function handleToogleDarkMode() {
        console.log("amem")
        if (localStorage.getItem("theme") === "dark") {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.remove('dark')
        }

    }

    return (
        <button
            onClick={handleToogleDarkMode}
            className="dark:active:border-zinc-600 active:border-zinc-800 border-zinc-700 dark:border-zinc-100 border-2 fixed bottom-6 right-6 h-12 w-12 rounded-full backdrop-blur-md flex justify-center items-center shadow-2xl z-50">
           <BsMoonStars className="block dark:hidden" color="#000"/>
           <BsSun className="hidden dark:block" color="#fff"/>
        </button>
    )
}