import Image from "next/image";
import React from "react";
import parse from "html-react-parser";

const NewsDetails = ({ postDetails }) => {
  const { title, short_des, img1, img2, img3, img4, long_des } =
    postDetails.data;
  return (
    <>
      <h2 className="text-4xl mt-16 mb-2">
        <span className="text-themeColor font-bold">{title && title}</span>
      </h2>
      <hr />
      <div className="grid md:grid-cols-2 gap-5">
        {img1 && (
          <Image
            src={img1}
            width={1000}
            height={500}
            alt="Sigle post images"
            className="h-[200px] md:h-[400px] object-cover w-full rounded-lg"
          />
        )}
        {img2 && (
          <Image
            src={img2}
            width={1000}
            height={500}
            alt="Sigle post images"
            className="h-[200px] md:h-[400px] object-cover w-full rounded-lg"
          />
        )}
        {img3 && (
          <Image
            src={img3}
            width={1000}
            height={500}
            alt="Sigle post images"
            className="h-[200px] md:h-[400px] object-cover w-full rounded-lg"
          />
        )}
        {img4 && (
          <Image
            src={img4}
            width={1000}
            height={500}
            alt="Sigle post images"
            className="h-[200px] md:h-[400px] object-cover w-full rounded-lg"
          />
        )}
      </div>
      <div className="post-details">
        {long_des && parse(long_des)}
        <div></div>
      </div>
    </>
  );
};

export default NewsDetails;
