import { Grid2 } from "@mui/material";
import BlogCards from "../atom/BlogCards";
import BlogSkeleton from "../atom/BlogSkeleton";
import { memo, useMemo } from "react";

type Props = {
  blogs: {
    body: string;
    id: number;
    title: string;
    userId: number;
  }[];
};

const BlogItem = ({ blogs }: Props) => {
  if (blogs?.length > 0)
    return (
      <Grid2 container spacing={2}>
        {blogs?.map((blog, index: number) => (
          <Grid2 key={index} size={12}>
            <BlogCards {...blog} />
          </Grid2>
        ))}
      </Grid2>
    );

  return (
    <>
      <Grid2 container spacing={2}>
        {Array(12)
          .fill(0)
          .map((item: number, index: number) => (
            <Grid2 size={12} key={index}>
              <BlogSkeleton />
            </Grid2>
          ))}
      </Grid2>
    </>
  );
};

export default memo(BlogItem);
