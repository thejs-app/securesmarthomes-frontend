import Footer from "./Footer";
import Header from "./header/Header";
import Trending from "./trending/Trending";

const HomeLayout = ({children, title}) => {
    return (
        <div>
            <title>
                {title}
            </title>
            <Header />
            <Trending />
            {children}
            <Footer />
        </div>
    );
}

export default HomeLayout;