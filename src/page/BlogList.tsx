import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "../store";
import BlogRedux from "../store/modules/blogs";
import BlogItem from "../components/template/BlogItem";
import { Box } from "@mui/material";

type Props = {};

const BlogList = (props: Props) => {
  const [blogsList, setBlogsList] = useState([]);
  const dispatch = useDispatch();

  const handleFetchBlogs = useCallback(async () => {
    const blogs = await dispatch(BlogRedux.actions.getPosts());
    setBlogsList(blogs);
  }, []);

  useEffect(() => {
    handleFetchBlogs();
  }, []);

  return (
    <Box padding={2} px={10} gap={2}>
      <BlogItem blogs={blogsList} />
    </Box>
  );
};

export default BlogList;
