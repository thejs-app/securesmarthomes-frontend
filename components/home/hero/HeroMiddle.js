import ImageContainer from "@/layouts/ImageContainer";
import Link from "next/link";

const HeroMiddle = ({ data }) => {
    const firstItem = data[0];
    const secondItem = data[1];
    return (
        <div className="lg:flex-1 px-4">
            <div className="flex flex-col gap-y-4">
                <Link href={`/blog/${firstItem.slug}`} className="flex flex-col gap-y-4">
                    <ImageContainer
                        image={firstItem.image}
                        width={585}
                        height={472}
                        priority
                    />
                </Link>
                <div className="flex flex-col gap-y-1.5">
                    <Link href={`/blog/${firstItem.slug}`} className="flex flex-col gap-y-1.5">
                        <h2 className="text-xl font-bold text-DarkGray hover:text-GrayLight2 transition-all duration-300">
                            {firstItem.title}
                        </h2>
                    </Link>
                    <Link href={`/category/${firstItem.category.slug}`} className="flex flex-col gap-y-1.5">
                        <p className="text-GrayLight2 text-xs font-semibold hover:text-SoftYellow transition-all duration-300">
                            {firstItem.category.name}
                        </p>
                    </Link>
                    <p className="text-GrayLight1 text-xs">
                        {new Date(firstItem.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </p>
                </div>
            </div>
            <div className="bg-LightGray h-[1px] w-full my-8"></div>
            <div className="flex justify-between gap-10">
                <div className="flex flex-col justify-center gap-y-3">
                    <Link href={`/category/${secondItem.category.slug}`} className="flex flex-col gap-y-1.5">
                        <p className="text-GrayLight2 text-xs font-semibold hover:text-SoftYellow transition-all duration-300">
                            {secondItem.category.name}
                        </p>
                    </Link>
                    <Link href={`/blog/${secondItem.slug}`} className="flex flex-col gap-y-1.5">
                        <h2 className="text-xl font-bold text-DarkGray hover:text-GrayLight2 transition-all duration-300">
                            {secondItem.title}
                        </h2>
                    </Link>
                    <p className="text-GrayLight1 text-xs">
                        {new Date(secondItem.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </p>
                </div>
                <Link href={`/blog/${secondItem.slug}`} className="flex flex-col gap-y-4">
                    <ImageContainer
                        image={secondItem.image}
                        width={207}
                        height={155}
                    />
                </Link>
            </div>
        </div>
    );
}

export default HeroMiddle;