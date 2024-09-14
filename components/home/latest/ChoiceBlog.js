import ImageContainer from "@/layouts/ImageContainer";
import Link from "next/link";

const ChoiceBlog = ({ choiceBlog }) => {
    return (
        <div>
            <h3 className="uppercase font-bold text-lg text-DarkGray text-center">
                Editor&apos;s Choice
            </h3>
            <p className="text-SoftYellow text-center">xxx</p>
            <div className="mt-5 flex flex-col gap-y-5">
                {
                    choiceBlog?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between gap-5">
                                    <Link href={`/blog/${item.slug}`} className="flex gap-y-4 w-2/6">
                                        <ImageContainer
                                            image={item.image}
                                            width={100}
                                            height={100}
                                        />
                                    </Link>
                                    <div className="flex justify-center flex-col gap-y-3 ">

                                        <Link href={`/blog/${item.slug}`} className="flex flex-col gap-y-1.5">
                                            <h2 className="text-md font-bold text-DarkGray hover:text-GrayLight2 transition-all duration-300">
                                                {item.title}
                                            </h2>
                                        </Link>
                                        <p className="text-GrayLight1 text-xs">
                                            {new Date(item.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>


                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ChoiceBlog;