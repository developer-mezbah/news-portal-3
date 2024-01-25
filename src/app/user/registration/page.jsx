import { AuthCheck } from "@/Components/Auth/AuthCheck";
import RegistrationForm from "@/Components/Auth/RegistrationForm";
import PlainLayout from "@/Components/master/PlainLayout";
import { redirect } from "next/navigation";
const Page = () => {
  const {email} = AuthCheck()
  if(email){
    redirect("/")
  }
  return (
    <PlainLayout>
      <RegistrationForm/>
    </PlainLayout>
  );
};

export default Page;
