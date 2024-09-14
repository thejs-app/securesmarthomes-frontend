import Head from "next/head";
import Footer from "./Footer";
import Header from "./header/Header";
import Trending from "./trending/Trending";

const HomeLayout = ({ children, title,
    description = "Secure Smart Homes is a platform that provides you with the latest news and trends in the smart home industry. Stay updated with the latest smart home gadgets and technologies.",
}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <Trending />
            {children}
            <Footer />
        </div>
    );
}

export default HomeLayout;