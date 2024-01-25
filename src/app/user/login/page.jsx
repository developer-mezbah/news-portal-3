import { AuthCheck } from "@/Components/Auth/AuthCheck";
import LoginForm from "@/Components/Auth/LoginForm";
import PlainLayout from "@/Components/master/PlainLayout";
import { redirect } from "next/navigation";

const Page = () => {
  const {email} = AuthCheck()
  if(email){
    redirect("/")
  }

  return (
    <PlainLayout>
      <LoginForm/>
    </PlainLayout>
  );
};

export default Page;
