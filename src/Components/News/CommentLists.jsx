"use client";
import { ErrorToast, SuccessToast } from "@/utils/FormHelper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoSendSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

const CommentLists = ({ postID, data }) => {
  const router = useRouter();
  const [formData, setFormData] = useState("");
  const id = parseInt(postID);
  const handleSubmit = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({ postID: id, descriptions: formData }),
    };
    let res = await (await fetch("/api/comments/manage", options)).json();
    if (res.status === "success") {
      SuccessToast("Comment Added!");
      setFormData("");
      router.refresh();
    } else {
      ErrorToast("Please Login, , , ");
      router.replace("/user/login");
    }
  };

  const handleDelete = async (id) => {
    const options = { method: "DELETE", body: JSON.stringify({ id }) };
    let res = await (await fetch("/api/comments/manage", options)).json();
    if (res.status === "success") {
      SuccessToast("Deleted Successfully!");
      router.refresh();
    }
  };
  return (
    <div>
      <h2 className="text-4xl mt-16 mb-2">
        <span className="text-themeColor font-bold">Comments</span>
      </h2>
      <hr />
      <div className="flex items-center justify-center gap-3 mt-5">
        <Image
          className="rounded-full"
          width={50}
          height={50}
          src={"/images/avtar.jpg"}
          alt="profile image"
        />
        <input
          className="w-full border-2 border-themeColor outline-none py-2 px-3 rounded-md"
          type="text"
          placeholder="Write a comment..."
          onChange={(e) => setFormData(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="text-4xl text-themeColor"
          type="submit"
        >
          <IoSendSharp />
        </button>
      </div>
      {/* comments  Lists*/}
      <div>
        {data &&
          data.data.map((item) => (
            <div key={item.id} className="space-y-3 sm:ml-16 mt-10">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="text-2xl">
                    <CgProfile />
                  </span>
                  <span>
                    {item.users.firstName + " " + item.users.lastName}
                  </span>
                </div>
                {/* {item.userID == auth.userID && (
                  <div
                    onClick={() => handleDelete(item.id)}
                    className="text-3xl text-red-500 cursor-pointer hover:text-red-300"
                  >
                    <RiDeleteBin5Line />
                  </div>
                )} */}
              </div>

              <p>{item.descriptions}</p>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentLists;
