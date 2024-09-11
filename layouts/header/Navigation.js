import Link from "next/link";
import { useRouter } from "next/router";
import HoveredItem from "./HoveredItem";

const Navigation = () => {
    const router = useRouter();
    const path = router.pathname;



    return (
        <nav className='flex justify-center items-center py-2.5 text-GrayLight2 font-bold'>
            <ul className='flex items-center gap-x-5'>
                <li className="p-4">
                    <Link href="/"
                        className={`${path == "/" && "text-DarkGray"} hover:text-DarkGray transition-all duration-300 `}>
                        HOME
                    </Link>
                </li>
                <li className="p-4 group/product">
                    <Link
                        href="/products" className={`${path == "/products" && "text-DarkGray"} hover:text-DarkGray transition-all duration-300`}>
                        PRODUCTS
                    </Link>
                    <HoveredItem />
                </li>
                <li className="p-4 group/blog">
                    <Link
                        href="/blogs" className={`${path == "/about" && "text-DarkGray"} hover:text-DarkGray transition-all duration-300`}>
                        BLOGS
                    </Link>
                    <HoveredItem />
                </li>
                <li className="p-4">
                    <Link href="/contact" className={`${path == "/contact" && "text-DarkGray"} hover:text-DarkGray transition-all duration-300`}>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;