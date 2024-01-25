import { headers } from "next/headers";

export const AuthCheck = () => {
  const headerList = headers();
  let email = headerList.get("email");
  let userID = headerList.get("id");
  if (email === "0" && userID === "0") {
    email = false
    userID= false
  }
  return { email, userID };
};
