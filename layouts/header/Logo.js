import Image from "next/image";
import Link from "next/link";

const Logo = ({ height = 57, width = 300 }) => {
    return (
        <div className='flex justify-center py-2.5 mb-3'>
            <Link href='/'>
                <Image
                    src='/logo.png'
                    width={width}
                    height={height}
                    alt='logo'
                    className="w-auto h-auto"
                />
            </Link>
        </div>
    );
}

export default Logo;