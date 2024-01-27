import PlainLayout from "@/Components/master/PlainLayout";
import parse from "html-react-parser";

async function getData() {
  try {
    const data = await (
      await fetch(`${process.env.BASE_URL}/api/policy?type=terms`)
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

const Terms = async () => {
  const data = await getData();
  return (
    <PlainLayout>
      <div className="container mx-auto">
        <h2 className="text-4xl mt-16 mb-2">
          <span className="text-themeColor font-bold">
            Terms and Conditions
          </span>
        </h2>
        <div className="my-5">
          <p>{parse(data[0]["long_des"])}</p>
        </div>
      </div>
    </PlainLayout>
  );
};
export default Terms;
