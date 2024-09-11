import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className='flex justify-center py-2.5 mb-3'>
            <Link href='/'>
                <Image src='/logo.png' width={300} height={57} alt='logo' />
            </Link>
        </div>
    );
}

export default Logo;