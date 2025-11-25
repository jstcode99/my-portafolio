import ThemeToggle from "@components/ui/react/ThemeToggle";
import { useState } from "react";

const Navigation: React.FC = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(!isOpenMenu);
  }

  return (
    <nav className="sticky top-0 z-10 dark:bg-gray-800 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={handleOpen}
              className="bnt-hamburger relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6 in-aria-expanded:hidden"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6 not-in-aria-expanded:hidden"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
          <div
            className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div className="flex shrink-0 items-center">
              <a href="#hero">
              JSTorres.dev</a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  aria-current="page"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white"
                >Contacto</a>
                <a
                  href="#projects"
                  className="rounded-md px-3 py-2 text-sm font-medium dark:text-white"
                >Projects</a>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <nav className={isOpenMenu ? 'block' : 'hidden'}>
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a
            href="#"
            aria-current="page"
            className="block rounded-md px-3 py-2 text-base font-medium dark:text-white"
          >Contacto</a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium dark:text-white"
          >Projects</a>
        </div>
      </nav>
    </nav>
  )
}

export default Navigation;