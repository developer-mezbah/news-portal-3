import LoginForm from "@/Components/Auth/LoginForm";
import PlainLayout from "@/Components/master/PlainLayout";
import { cookies } from "next/headers";

const Page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;
  isLogin = typeof token !== "undefined";

  return (
    <PlainLayout>
      <LoginForm />
    </PlainLayout>
  );
};

export default Page;
