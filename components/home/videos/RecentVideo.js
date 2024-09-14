import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import ImageContainer from '@/layouts/ImageContainer';
import Link from 'next/link';

const RecentVideo = ({ currentVideo }) => {
    const [loaded, setLoaded] = useState(false);
    const [isPlay, setIsPlay] = useState(false);


    useEffect(() => {
        window && window !== undefined && setLoaded(true);
    }, []);

    useEffect(() => {
        setIsPlay(false);
    }, [currentVideo])

    return (
        <div className='w-8/12'>
            {
                isPlay ?
                    <div>
                        {
                            loaded && (
                                <ReactPlayer
                                    url={currentVideo?.link}
                                    width='100%'
                                    height='540px'
                                    playing
                                />
                            )

                        }
                    </div>
                    :
                    <div
                        onClick={() => setIsPlay(true)}
                        className='cursor-pointer'
                    >
                        {
                            currentVideo?.name &&
                            <ImageContainer
                                image={currentVideo?.image}
                                width={1000}
                                height={540}
                                video
                                recentVideo
                            />
                        }

                    </div>
            }
            <div className='mt-5 flex flex-col gap-y-5'>
                <Link href={`/category/${currentVideo?.category.slug}`}>
                    <span className="text-MutedGrayBlue text-xs font-bold">{currentVideo?.category.name}</span>
                </Link>
                <h4 className="text-LightWhite text-4xl font-bold">{currentVideo?.name}</h4>
                <p className="text-GrayLight1 text-xs">
                    {new Date(currentVideo?.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </p>
            </div>


        </div>
    );
}

export default RecentVideo;