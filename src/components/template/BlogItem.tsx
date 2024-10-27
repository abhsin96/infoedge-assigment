import { Grid2, Pagination, Stack } from "@mui/material";
import BlogCards from "../atom/BlogCards";
import BlogSkeleton from "../atom/BlogSkeleton";
import { memo, useMemo, useState } from "react";

type Props = {
  blogs: {
    body: string;
    id: number;
    title: string;
    userId: number;
  }[];
};

const BlogItem = ({ blogs }: Props) => {
  const [page, setPage] = useState(0);
  const handlePagenation = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    console.log(event.target);
    setPage(page);
  };
  if (blogs?.length > 0)
    return (
      <Stack direction={"column"} spacing={2}>
        <Grid2 container spacing={2}>
          {blogs
            ?.slice(page * 5, page * 5 + 5)
            .map((blog, index: number) => (
              <Grid2 key={index} size={12}>
                <BlogCards {...blog} />
              </Grid2>
            ))}
        </Grid2>
        <Pagination 
          count={blogs?.length/5-1}
          showFirstButton
          showLastButton
          onChange={handlePagenation}
        />
      </Stack>
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
