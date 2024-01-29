import RegistrationForm from "@/Components/Auth/RegistrationForm";
import PlainLayout from "@/Components/master/PlainLayout";
import { cookies } from "next/headers";
const Page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;
  isLogin = typeof token !== "undefined";
  return (
    <PlainLayout>
      <RegistrationForm />
    </PlainLayout>
  );
};

export default Page;
