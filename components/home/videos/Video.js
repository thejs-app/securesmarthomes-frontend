import { useState, useEffect } from "react";
import RecentVideo from "./RecentVideo";
import VideoList from "./VideoList";
import Container from '@/layouts/Container';
import Link from "next/link";
import { ArrowBigRight, MoveRightIcon } from "lucide-react";

const Video = ({ videos }) => {
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        if (videos && videos.length > 0) {
            setCurrentVideo(videos[0]);
        }
    }, [videos]);


    return (
        <div className="bg-DarkGray my-10 py-20 max-h-fit">
            <Container>
                <div className="flex items-center gap-x-5">
                    <h3 className="text-SoftWhite text-4xl font-bold">
                        Recent Video
                    </h3>
                    <span className="text-GrayLight1">
                        Stay up-to-date
                    </span>
                    <div className="h-1 border-GrayDark border-y flex-1"></div>
                    <Link href="/videos" className="text-SoftWhite flex items-center gap-x-3 !cursor-pointer hover:text-SoftYellow transition-all duration-300 group">
                        More Videos
                        <span className="border border-GrayDark group-hover:border-SoftYellow transition-all duration-300 rounded-full p-2">
                            <MoveRightIcon size={14} className="text-SoftWhite group-hover:text-SoftYellow transition-all duration-300" />
                        </span>
                    </Link>
                </div>
                <div className="flex gap-x-8 mt-8">
                    <RecentVideo currentVideo={currentVideo} />
                    <VideoList videos={videos} setCurrentVideo={setCurrentVideo} currentVideo={currentVideo} />
                </div>
            </Container>
        </div>
    );
}

export default Video;