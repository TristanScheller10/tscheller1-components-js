import Link from "next/link"
import {IoBonfire} from 'react-icons/io5'
import {IoLogoGithub} from 'react-icons/io5'
 function NavBar ( {children}){
    return (
        <nav className="py-4 px-4  ">
            <ul className="flex justify-between gap-x-8 items-center">
                <li><Link className="text-rose-600 font-medium" href="/">
                          <figure className="flex items-center text-red-500 gap-1">
                            <IoBonfire className="w-6 h-6  "/>
                            <figcaption className="text-sm">Food Items</figcaption>
                          </figure>
                    </Link></li>
                <li><Link className="text-blue-600 font-medium" href="/foods">foods</Link></li>
                <li><Link className="text-blue-600 font-medium" href="/foods">
                       <IoLogoGithub className="w-6 h-6 text-gray-500" href="https://github.com/TristanScheller10/tscheller1-components-js.git"/>
                    </Link></li>
            </ul>
        </nav>
    )
 }



 export {NavBar}