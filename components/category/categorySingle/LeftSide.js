import ImageContainer from "@/layouts/ImageContainer";

const LeftSide = ({data}) => {
    return (
        <div className="w-9/12">
            <h1 className="text-3xl font-bold text-center my-5">{data?.name}</h1>

            {
                    data?.list?.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.name}
                                <ImageContainer
                                    image={item.image}
                                    width={1000}
                                    height={541}
                                />
                            </div>
                        )
                    })
                }
        </div>
    );
}

export default LeftSide;