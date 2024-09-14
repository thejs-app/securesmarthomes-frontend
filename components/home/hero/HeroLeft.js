import ImageContainer from "@/layouts/ImageContainer";
import Link from "next/link";

const HeroLeft = ({ data }) => {
    return (
        <div className="lg:w-3/12 w-full mb-5">
            <div className="flex flex-col gap-y-5">
                {
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-4">
                            <Link href={`/blog/${item.slug}`} className="flex flex-col gap-y-4">
                                <ImageContainer
                                    image={item.image}
                                    width={325}
                                    height={210}
                                />
                            </Link>
                            <div className="flex flex-col gap-y-1.5">
                                <Link href={`/category/${item.category.slug}`} className="flex flex-col gap-y-1.5">
                                    <p className="text-GrayLight2 text-xs font-semibold hover:text-SoftYellow transition-all duration-300">
                                        {item.category.name}
                                    </p>
                                </Link>
                                <Link href={`/blog/${item.slug}`} className="flex flex-col gap-y-1.5">
                                    <h2 className="text-xl font-bold text-DarkGray hover:text-GrayLight2 transition-all duration-300">
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
                    ))
                }
            </div>

        </div>
    );
}

export default HeroLeft;