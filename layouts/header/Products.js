import api from "@/helpers/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const imagePath = process.env.IMAGE_PATH;


const Products = () => {
    const [categories, setCategories] = useState([]);


    const getCategories = async () => {
        const { list, count } = await api.get('category:getAll?populate=image&option.limit=4&filter.type=product');
        if (list) {
            setCategories(list);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div
            id="product"
            className={`z-50 group-hover/product:block hidden text-LightWhite min-w-full absolute bottom-o left-0 group-hover/product:animate-openDropDownMenu`}
        >
            <div className="bg-DarkGray mt-10 p-5">
                <div className="flex flex-col gap-y-3">
                    <div className="font-bold px-2">Products</div>
                    <div className="flex flex-wrap ">
                        {categories.map((category, index) => (
                            <Link key={index} href={`/category/${category.slug}`} className="flex flex-col items-center gap-y-2 basis-1/4 px-2">
                                <div className="w-full max-w-[400px] h-[250px] relative overflow-hidden group">
                                    <Image
                                        src={`${imagePath}/${category.image.name}`}
                                        layout="fill"
                                        objectFit="cover"  // Görsel kutuya sığacak şekilde ayarlanır, taşma olmaz
                                        alt={category.name}
                                        className="transition-transform duration-700 ease-in-out group-hover:scale-105 transform-origin-center"
                                    />
                                </div>
                                <div className="text-start w-full">{category.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;