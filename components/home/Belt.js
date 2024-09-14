import Logo from "@/layouts/header/Logo";
import ImageContainer from "@/layouts/ImageContainer";

const Belt = ({ beltImage }) => {




    return (
        <div className="bg-SoftWhite my-20 flex justify-center w-full py-12 relative group">
            <div>
                {
                    beltImage && (
                        <ImageContainer
                            image={beltImage}
                            width={728}
                            height={90}
                        />
                    )
                }
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                
                    <Logo
                        height={40}
                        width={230}
                    />
                </div>
            </div>
        </div>
    );
}

export default Belt;