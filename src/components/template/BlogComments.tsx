import React from "react";
import BlogComment from "../atom/BlogComment";
import { Stack, Typography } from "@mui/material";

type Props = {
  data: any[];
};

const BlogComments = ({ data }: Props) => {
  return (
    <Stack direction={"column"} spacing={2} >
        <Typography variant="h5">Comments</Typography>
      {data.map((item: any, index: number) => (
        <BlogComment key={index} {...item} />
      ))}
    </Stack>
  );
};

export default BlogComments;
