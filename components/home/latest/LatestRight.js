import ChoiceBlog from "./ChoiceBlog";
import LatestRightSlider from "./LatestRightSlider";

const LatestRight = ({choiceProduct, choiceBlog}) => {
    return (
        <div className="w-4/12">
            <div className="sticky top-0">
                <LatestRightSlider choiceProduct={choiceProduct} />
                <div className="bg-LightGray h-[1px] w-full my-10"></div>
                <ChoiceBlog choiceBlog={choiceBlog} />
            </div>
        </div>
    );
}

export default LatestRight;