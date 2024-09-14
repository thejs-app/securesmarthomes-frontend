import Container from "@/layouts/Container";
import LatestLeft from "./LatestLeft";
import LatestRight from "./LatestRight";

const Latest = ({data}) => {
    return (
        <div className="mb-10">
            <Container>
                <div className="flex w-full justify-between items-center gap-x-10">
                    <div className="h-1 border-y w-full border-LightGray"></div>
                    <div className="w-4/12 text-center">
                        <h3 className="text-3xl font-bold text-DarkGray">Latest Blogs</h3>
                        <p className="text-GrayLight2">
                            Stay up-to-date
                        </p>
                    </div>
                    <div className="h-1  border-y w-full border-LightGray"></div>
                </div>
                <div className="flex mt-10 gap-x-8">
                    <LatestLeft data={data?.latestBlog} />
                    <LatestRight choiceProduct={data?.choiceProduct} choiceBlog={data?.choiceBlog}/>
                </div>
            </Container>
        </div>
    );
}

export default Latest;