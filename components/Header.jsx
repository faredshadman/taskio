import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBoxArrowInRight, BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";

const navItems = [
  {
    id: 0,
    name: "Xidmətlər",
    slug: "/services",
  },
  {
    id: 1,
    name: "Haqqımızda",
    slug: "/about",
  },
  {
    id: 2,
    name: "Bölgələr",
    slug: "/regions",
  },
];
const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <header className="h-20 cursor-pointer font-montserrat">
      <nav className="flex h-20 px-4 lg:px-0 items-center justify-between max-w-6xl mx-auto">
        <div className="w-32 h-7 relative">
          <Link passHref href="/">
            <a>
              <Image
                width={120}
                height={30}
                src="/img/Taskio.svg"
                alt="taskio_logo"
              />
            </a>
          </Link>
        </div>
        <div className="inline-flex lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul className="lg:flex hidden space-x-12 font-sans text-sm text-primary">
          {navItems.map((navItem) => (
            <Link key={navItem.id} href={`${navItem.slug}`} passHref>
              <li
                className={`w-20 py-1 font-sans transition-all duration-200 hover:font-bold 
               ${
                 router.asPath === navItem.slug
                   ? "text-secondary font-bold"
                   : "text-primary"
               }
              `}>
                <a>{navItem.name}</a>
              </li>
            </Link>
          ))}
        </ul>
        <div className="hidden lg:flex space-x-12">
          <div className="flex items-center space-x-2 justify-center">
            <BsBoxArrowInRight className="text-lg text-secondary" />
            <button className="text-primary font-bold font-sans">
              Daxil ol
            </button>
          </div>
          <div className="flex items-center group px-1 rounded-full w-36 h-10 bg-secondary space-x-2">
            <div className="bg-white group-hover:translate-x-24 transition-all duration-300 ease-linear rounded-full p-1">
              <BsArrowRightShort className="text-secondary  transition-all duration-150 ease-in text-2xl" />
            </div>
            <button className="text-white group-hover:hidden transition-all ease-in-out duration-100 text-sm font-medium">
              Taskioçu ol
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
