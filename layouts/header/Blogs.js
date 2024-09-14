import api from "@/helpers/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageContainer from "../ImageContainer";

const imagePath = process.env.IMAGE_PATH;


const Blogs = () => {
const [blogs, setBlogs] = useState([]);


    const getBlogs = async () => {
        const { list, count } = await api.get('category:getAll?populate=image&option.limit=4&filter.type=blog');
        if (list) {
            setBlogs(list);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div
            id="blog"
            className={`z-50 group-hover/blog:block hidden text-LightWhite min-w-full absolute bottom-o left-0 group-hover/blog:animate-openDropDownMenu`}
        >
            <div className="bg-DarkGray mt-10 p-5">
                <div className="flex flex-col gap-y-3">
                    <div className="font-bold px-2">Blogs</div>
                    <div className="flex flex-wrap ">
                        {blogs.map((blog, index) => (
                            <Link key={index} href={`/category/${blog.slug}`} className="flex flex-col items-center gap-y-2 basis-1/4 px-2">
                                <div className="w-full max-w-[400px] h-[250px] relative overflow-hidden group">
                                    <ImageContainer image={blog.image} height={250} />
                                </div>
                                <div className="text-start w-full">{blog.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;