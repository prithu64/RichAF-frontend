import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-700/40 dark:bg-transparent dark:text-white lg:py-8  py-4 px-4 border-t ">
      <div className=" flex flex-col max-w-5xl mx-auto md:flex-row justify-between items-center gap-4 ">
        <p className="text-sm">&copy; {new Date().getFullYear()} RichAF . All rights reserved.</p>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/prithu64" target="_blank" className="hover:text-gray-400 transition"><FaGithub size={25} /></a>
          <a href="https://x.com/Prachurjya91407" target="_blank" className="hover:text-gray-400 transition"><FaXTwitter  size={25}/></a>
          <a href="#none" className="hover:text-gray-400 transition flex items-center ">
            made by <span className="underline ml-2"> Prachurjya </span> 
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer