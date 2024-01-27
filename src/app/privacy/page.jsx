import PlainLayout from "@/Components/master/PlainLayout";
import parse from "html-react-parser";

async function getData() {
  try {
    const data = await (
      await fetch(`${process.env.BASE_URL}/api/policy?type=privacy`)
    ).json()
      return data.data
  } catch (error) {
    console.log(error);
  }
}
export async function generateMetadata(){
  const data = await getData();
  return{
    "title": data[0].type,
    "description": data[0].long_des,
    "keywords": "next.js project, news portal nextjs project, full stack nextJS project, full stack news website, NEXT.JS PROJECT",
  }
}

const page = async () => {
  let data = await getData();
  return (
    <PlainLayout>
      <div className="container mx-auto">
        <h2 className="text-4xl mt-16 mb-2">
          <span className="text-themeColor font-bold">Privacy</span>
        </h2>
          {data && parse(data[0]["long_des"])}
      </div>
    </PlainLayout>
  );
};

export default page;
