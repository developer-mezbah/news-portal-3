import PlainLayout from "@/Components/master/PlainLayout";
import parse from "html-react-parser";

async function getData() {
  try {
    return (
      await (
        await fetch(`${process.env.BASE_URL}/api/policy?type=terms`)
      ).json()
    )["data"];
  } catch (error) {
    console.log(error);
  }
}

const page = async () => {
  const data = await getData();

  return (
    <PlainLayout>
      <div className="container mx-auto">
        <h2 className="text-4xl mt-16 mb-2">
          <span className="text-themeColor font-bold">
            Terms and Conditions
          </span>
        </h2>
        <div className="my-5"><p>{parse(data[0]["long_des"])}</p></div>
      </div>
    </PlainLayout>
  );
};

export default page;
