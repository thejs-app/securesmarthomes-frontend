import Container from "@/layouts/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const CategorySingle = ({ data }) => {
    return (
        <Container>
            <div className="flex gap-5">
                <LeftSide
                    data={data}
                />
                <RightSide />
            </div>
        </Container>
    );
}

export default CategorySingle;