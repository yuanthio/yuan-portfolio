import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar({ darkMode = false, menuText = "Home", menuHref = "/" }) {
  return (
    <div className={`h-full w-16 flex flex-col items-center justify-between py-8 z-40 ${darkMode ? 'bg-zinc-900 text-yellow-100' : 'bg-yellow-100 text-zinc-900'}`}>
      <div className="flex flex-col items-center space-y-8">
        <Link 
          href={menuHref} 
          className={`transform -rotate-90 ${darkMode ? 'text-yellow-100 hover:text-yellow-200' : 'text-zinc-900 hover:text-zinc-700'} transition-colors duration-300 whitespace-nowrap`}
        >
          {menuText}
        </Link>
      </div>
      
      <div className={`transform -rotate-90 text-sm whitespace-nowrap ${darkMode ? 'text-yellow-100' : 'text-zinc-900'}`}>
        © 2026
      </div>
    </div>
  );
}
