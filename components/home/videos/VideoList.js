import ImageContainer from "@/layouts/ImageContainer";

const VideoList = ({ videos, currentVideo, setCurrentVideo }) => {
    return (
        <div className='w-4/12'>
            <div className="flex flex-col gap-y-5 w-full scrollbar-w-1 scrollbar scrollbar-thumb-SoftYellow scrollbar-track-transparent max-h-[700px] overflow-y-scroll">
                {
                    videos && videos.length > 0 && videos.map((video, index) => {
                        return (
                            <div key={index} onClick={() => setCurrentVideo(video)} className={`flex items-center group gap-x-3  ${currentVideo?.id === video.id ? 'text-SoftYellow' : 'text-SoftWhite'}`}>
                                <div className="w-1/3 cursor-pointer">
                                    <ImageContainer
                                        image={video.image}
                                        width={152}
                                        height={110}
                                        video
                                        selectedVideo={currentVideo?._id == video._id}
                                    />
                                </div>
                                <div className="w-2/3 cursor-pointer">
                                    <span className="text-MutedGrayBlue text-xs font-bold">{video.category.name}</span>
                                    <h4 className="text-LightWhite text-lg font-bold">{video.name}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default VideoList;