import ImageContainer from "@/layouts/ImageContainer";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const LatestLeft = ({ data }) => {
    const [firstItems, setFirstItems] = useState([]);
    const [secondItems, setSecondItems] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setFirstItems(data.slice(0, 3));
        setSecondItems(data.slice(4, 7));
    }, [data]);

    const clickHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setFirstItems([...firstItems, ...data.slice(3, 4)]);
            setSecondItems([...secondItems, ...data.slice(7, 8)]);
            setLoading(false);
        }, 2000);
    }

    return (
        <div className="w-11/12">
            <div className=" flex gap-x-8">
                <div className="w-1/2 flex flex-col gap-y-5">
                    {
                        firstItems?.map((item, index) => {
                            const mod = index % 2;
                            const height = mod == 0 ? 272 : 408;
                            return (
                                <div key={index} className="flex flex-col w-full gap-y-5">
                                    <Link href={`/blog/${item.slug}`} className="flex flex-col gap-y-4">
                                        <ImageContainer
                                            image={item.image}
                                            height={height}
                                            width={1500}
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-y-1.5">
                                        <Link href={`/category/${item.category.slug}`} className="flex flex-col gap-y-1.5">
                                            <p className="text-GrayLight2 text-xs font-semibold hover:text-SoftYellow transition-all duration-300">
                                                {item.category.name}
                                            </p>
                                        </Link>
                                        <Link href={`/blog/${item.slug}`} className="flex flex-col gap-y-1.5">
                                            <h2 className="text-2xl font-bold text-DarkGray hover:text-GrayLight2 transition-all duration-300">
                                                {item.title}
                                            </h2>
                                        </Link>
                                        <p className="text-GrayLight1 text-xs hover:text-SoftYellow transition-all duration-300">
                                            {new Date(item.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-1/2 flex flex-col gap-y-5">
                    {
                        secondItems?.map((item, index) => {
                            const mod = index % 2;
                            const height = mod !== 0 ? 272 : 408;
                            return (
                                <div key={index} className="flex flex-col w-full gap-y-5">
                                    <Link href={`/blog/${item.slug}`} className="flex flex-col gap-y-4">
                                        <ImageContainer
                                            image={item.image}
                                            height={height}
                                            width={1500}
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-y-1.5">
                                        <Link href={`/category/${item.category.slug}`} className="flex flex-col gap-y-1.5">
                                            <p className="text-GrayLight2 text-xs font-semibold hover:text-SoftYellow transition-all duration-300">
                                                {item.category.name}
                                            </p>
                                        </Link>
                                        <Link href={`/blog/${item.slug}`} className="flex flex-col gap-y-1.5">
                                            <h2 className="text-2xl font-bold text-DarkGray hover:text-GrayLight2 transition-all duration-300">
                                                {item.title}
                                            </h2>
                                        </Link>
                                        <p className="text-GrayLight1 text-xs hover:text-SoftYellow transition-all duration-300">
                                            {new Date(item.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                firstItems.length != 4 &&
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => clickHandler()}
                        className="flex items-center gap-x-2 bg-SoftYellow group text-DarkGray hover:bg-DarkGray hover:text-SoftWhite px-8 py-4 rounded-[30px] font-bold text-xs hover:bg-SoftYellowHover transition-all duration-300">
                        {
                            loading &&
                            <LoaderIcon size={20}
                                className="mr-2 animate-spin group-hover:text-SoftWhite"
                            />
                        }
                        LOAD MORE
                    </button>
                </div>
            }
        </div>
    );
}

export default LatestLeft;