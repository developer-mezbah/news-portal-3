import { AuthCheck } from "@/Components/Auth/AuthCheck";
import CommentLists from "@/Components/News/CommentLists";
import NewsDetails from "@/Components/News/NewsDetails";
import PopularList from "@/Components/News/PopularList";
import PlainLayout from "@/Components/master/PlainLayout";

async function getData(id) {
  try {
    const postDetails = await (
      await fetch(`${process.env.BASE_URL}/api/news/news-details?id=${id}`)
    ).json();
    const popular = await (
      await fetch(`${process.env.BASE_URL}/api/news/news-by-type?type=popular`)
    ).json();
    const commentLists = await (
      await fetch(`${process.env.BASE_URL}/api/comments/news?id=${id}`, {cache: 'no-store'})
    ).json();
    return { postDetails, popular, commentLists };
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata({ searchParams }){
  const id = searchParams.id;
  const { postDetails } = await getData(id);
  return{
    "title": postDetails.data.title,
    "description": postDetails.data.long_des,
    "keywords": postDetails.data.keywords,
    "openGraph": {
      "title": postDetails.data.title,
      "images": postDetails.data.img1,
      "description": postDetails.data.short_des
    }
  }
}


const details = async ({ searchParams }) => {
  const id = searchParams.id;
  const { postDetails, popular, commentLists } = await getData(id);
  const {email, userID} = AuthCheck()
  return (
    <PlainLayout>
      <div className="mt-5 container mx-auto">
        <div className="flex gap-4">
          <div className="mx-auto w-3/4 my-5 flex flex-col gap-5">
            <NewsDetails postDetails={postDetails} />
            <CommentLists postID={id} data={commentLists} auth={{email,userID}} />
          </div>
          <div className="w-1/4 lg:block hidden mb-5">
            <PopularList popularLists={popular} />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default details;
