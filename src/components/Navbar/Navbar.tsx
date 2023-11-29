"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../assets/logo-white.png';
import { FaBars } from "react-icons/fa";
import Image from 'next/image';
export default function Navbar() {
    const router = usePathname();
    // if(session){
    //     console.log("fine",session);
        
    // }

    const isLinkActive = (href: string) => {
        return router === href ? 'bg-white px-2.5 py-0.5 rounded-[30px]' : '';
    };

    return (
        <div>
            {/* <Navbar /> */}
            <header className="bg-black relative z-[9] border-solid ">
                <div className='container '>
                    <div className="flex justify-between items-center ">
                        {/* Logo */}
                        <Link href={('/')} className="text-red-500 font-bold text-4xl">
                            {/* <span className="text-red-500 font-bold">Cal.</span>
                            <span className="text-white text-3xl">Com</span> */}
                            <Image src={logo} alt='logo'  className='sm:w-[64px] w-[100px]'/>
                        </Link>

                        {/* Navigation Links */}
                        <nav className="sm:hidden flex space-x-6 text-white px-10 py-2.5 border-2 border-solid border-[white] rounded-[30px]">
                            <ul className="flex items-center space-x-4">
                                <li className={isLinkActive('/pricing')}>
                                    <Link href="/pricing" >
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex items-center space-x-4">
                                <li className={isLinkActive('/plans')}>
                                    <Link href="/plans">
                                        Plans
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex items-center space-x-4">
                                <li className={isLinkActive('/products')}>
                                    <Link href="/products">
                                        Products
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex items-center space-x-4">
                                <li className={isLinkActive('/docs')}>
                                    <Link href="/docs">
                                        Docs
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex items-center space-x-4">
                                <li className={isLinkActive('/blogs')}>
                                    <Link href="/blogs">
                                        Blogs
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <ul className=" flex items-center ">
                                <li className='sm:hidden text-[black] rounded px-3.5 py-1.5 bg-white'>
                                    <Link href="/login">
                                        Login
                                    </Link>
                                </li>
                                <span className='text-white hidden sm:block pr-2 text-[24px]'><FaBars /></span>
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
