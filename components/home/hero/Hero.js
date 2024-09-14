import Container from "@/layouts/Container";
import HeroLeft from "./HeroLeft";
import HeroMiddle from "./HeroMiddle";
import HeroRight from "./HeroRight";

const Hero = ({ data }) => {



    return (
        <Container>
            <div className="flex gap-4 mt-5">
                <HeroLeft
                    data={data.slice(2, 4)}
                />
                <HeroMiddle
                    data={data.slice(0, 2)}
                />
                <HeroRight
                    data={data.slice(4, 8)}
                />
            </div>
        </Container>
    );
}

export default Hero;