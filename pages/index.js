import Belt from "@/components/home/Belt";
import Hero from "@/components/home/hero/Hero";
import Latest from "@/components/home/latest/Latest";
import Video from "@/components/home/videos/Video";
import api from "@/helpers/api";
import HomeLayout from "@/layouts/HomeLayout";


export default function index({ heroList, beltImage, latestBlog, videos }) {
  return (
    <HomeLayout title="Home - Secure Smart Homes">
      <Hero data={heroList} />
      <Belt beltImage={beltImage} />
      <Latest data={latestBlog} />
      <Video videos={videos} />
    </HomeLayout>
  );
}

export async function getServerSideProps() {
  try {
    const { list } = await api.get('blog:getAll?filter.hero=true&populate=image,category&option.limit=8');
    const { list: belt } = await api.get('belt:getAll?option.limit=1&populate=image');
    const { list: latestBlog } = await api.get('blog:getAll?populate=image,category&option.limit=8');
    const { list: choiceProduct } = await api.get('product:getAll?filter.choice=true&populate=image,category&option.limit=8');
    const { list: choiceBlog } = await api.get('blog:getAll?filter.choice=true&populate=image&option.limit=3');
    const { list: videos } = await api.get('video:getAll?populate=image,category&option.limit=8');
    if (list) {
      return {
        props: {
          heroList: list,
          beltImage: belt[0].image,
          latestBlog: { latestBlog, choiceProduct, choiceBlog },
          videos
        }
      }
    }
  } catch (error) {
    return { props: { data: [] } }
  }
}