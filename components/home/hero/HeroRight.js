import ImageContainer from "@/layouts/ImageContainer";
import Link from "next/link";


const HeroRight = ({ data }) => {
    return (
        <div className="w-3/12">
            {
                data.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between gap-5">
                            <div className="flex justify-center flex-col gap-y-3 w-3/5">
                                <Link href={`/category/${item.category.slug}`} className="flex flex-col gap-y-1.5">
                                    <p className="text-GrayLight2 text-xs font-semibold hover:text-SoftYellow transition-all duration-300">
                                        {item.category.name}
                                    </p>
                                </Link>
                                <Link href={`/blog/${item.slug}`} className="flex flex-col gap-y-1.5">
                                    <h2 className="text-md font-bold text-DarkGray hover:text-GrayLight2 transition-all duration-300">
                                        {item.title}
                                    </h2>
                                </Link>
                            </div>
                            <Link href={`/blog/${item.slug}`} className="flex gap-y-4">
                                <ImageContainer
                                    image={item.image}
                                    width={100}
                                    height={100}
                                />
                            </Link>

                        </div>
                        {
                            index !== data.length - 1 && <div className="bg-LightGray h-[1px] w-full my-8"></div>
                        }
                    </div>
                ))

            }
        </div>
    );
}

export default HeroRight;