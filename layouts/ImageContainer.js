import { Play } from "lucide-react";
import Image from "next/image";

const imagePath = process.env.IMAGE_PATH;
const ImageContainer = ({ image, height, width, video, selectedVideo, recentVideo, priority }) => {
    return (
        <div
            className="w-full  relative overflow-hidden group">
            <Image
                src={`${imagePath}/${image?.name}`}
                alt={image?.alt ? image?.alt : image?.name}
                className="transition-transform duration-700 ease-in-out group-hover:scale-105 transform-origin-center object-cover h-auto w-auto"
                width={width ? width : 1000}
                height={height}
                style={{ width: width ? width : "100%", height }}
                priority={priority ? priority : false}
            />
            {
                video && (
                    <div className="absolute inset-0 bg-Black bg-opacity-50 flex items-center justify-center">
                        <div className={` p-2 rounded-full ${selectedVideo && "bg-SoftWhite"} ${recentVideo ? " bg-SoftWhite group-hover:scale-[2] group-hover:bg-SoftYellow" : "group-hover:bg-SoftWhite border"}  transition-all duration-300`}>
                            <Play size={16} className={` ${selectedVideo ? "text-DarkGray" : (recentVideo ? "text-DarkGray" : "text-SoftWhite")}  group-hover:text-DarkGray transition-all duration-300`} />
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ImageContainer;