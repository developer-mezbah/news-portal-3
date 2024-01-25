import PlainLayout from "@/Components/master/PlainLayout";
import parse from "html-react-parser";

async function getData() {
  try {
    return (
      await (
        await fetch(`${process.env.BASE_URL}/api/policy?type=privacy`)
      ).json()
    )["data"];
  } catch (error) {
    console.log(error);
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
