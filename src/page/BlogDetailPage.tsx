import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "../store";
import BlogRedux from "../store/modules/blogs";
import BlogDetail from "../components/template/BlogDetail";
import { Box } from "@mui/material";
import BlogComments from "../components/template/BlogComments";

type Props = {};

type BlogDetails = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const BlogDetailPage = (props: Props) => {
  const routerState = useParams();
  const dispatch = useDispatch();
  const [blogDetail, setBlogDetail] = useState<BlogDetails>({
    body: "",
    id: 0,
    title: "",
    userId: 0,
  });
  const [blogComments, setBlogComments] = useState([]);

  const handleFetchBlogDetails = useCallback(async () => {
    const blogDetail = await dispatch(
      BlogRedux.actions.getBlogDetails({ id: routerState?.id })
    );
    setBlogDetail(blogDetail);
  }, [routerState?.id]);

  const handleFetchBlogComments = useCallback(async () => {
    const blogComment = await dispatch(
      BlogRedux.actions.getBlogComments({ id: routerState?.id })
    );
    setBlogComments(blogComment);
  }, [routerState?.id]);

  useEffect(() => {
    handleFetchBlogDetails();
    handleFetchBlogComments();
  }, []);
  return (
    <Box p={2} px={10} gap={8} display={"flex"} flexDirection={"column"}>
      <BlogDetail {...blogDetail} />
      <BlogComments data={blogComments}/>
    </Box>
  );
};

export default BlogDetailPage;
