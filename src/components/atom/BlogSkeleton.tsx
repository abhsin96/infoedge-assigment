import { Skeleton, Stack } from "@mui/material";
import React from "react";

type Props = {};

const BlogSkeleton = (props: Props) => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Skeleton variant="rounded" width="100%" height={40} />
      <Skeleton variant="rectangular" animation={"wave"} width="100%">
        <div style={{ paddingTop: "200px" }} />
      </Skeleton>
    </Stack>
  );
};

export default BlogSkeleton;
