import CategorySingle from "@/components/category/categorySingle/CategorySingle";
import api from "@/helpers/api";
import HomeLayout from "@/layouts/HomeLayout";

const index = ({data, }) => {
    return (
        <HomeLayout>
            <CategorySingle data={data} />
        </HomeLayout>
    );
}


export const getServerSideProps = async ({params}) => {
    const { slug } = params;

    try {
        const category = await api.get(`category:get?filter.slug=${slug}`);
        const { list } = await api.get(`blog:getAll?filter.category=${category?._id}&populate=image`);

        const data = {
            name: category?.name,
            list: list
        }

        if (list) {
            return {
                props: {
                    data
                }
            }
        }
    } catch (error) {

        return { props: { data: [] } }
    }

    
}

export default index;