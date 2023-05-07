
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
            className="absolute bottom-6 right-6 h-12 w-12 rounded-full -6 bg-zinc-900 dark:bg-zinc-100 flex justify-center items-center shadow-2xl">
            <label>O</label>
        </button>
    )
}