import React from "react";
import BlogCards from "../atom/BlogCards";

type Props = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const BlogDetail = (props: Props) => {
    const {id}= props
  return (
    <>
      <BlogCards {...props} />
    </>
  );
};

export default BlogDetail;
