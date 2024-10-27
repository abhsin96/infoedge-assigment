import { Card, Divider, Stack, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const BlogCards = ({ body, title, userId, id }: Props) => {
  const navigate = useNavigate();

  const handleNavigateToDetail = useCallback(() => {
    navigate(`/detail/${id}`);
  }, []);
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        flex: 1,
        border: 2,
        borderRadius: 4,
        backgroundColor: "#F2EED7",
        borderColor: "#CBD2A4",
      }}
    >
      <Stack spacing={2} direction={"column"} m={2}>
        <Typography
          onClick={handleNavigateToDetail}
          variant="h3"
          fontWeight={600}
          sx={{ cursor: "pointer" }}
        >
          {title}
        </Typography>
        <Divider />
        <Typography variant="body1">{body}</Typography>
      </Stack>
    </Card>
  );
};

export default BlogCards;
