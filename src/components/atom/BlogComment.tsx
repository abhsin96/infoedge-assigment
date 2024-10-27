import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = { name: string; email: string; body: string };

const BlogComment = ({ name, body, email }: Props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h5" fontWeight={600}>
          {email}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h4" fontWeight={600}>
          {name}
        </Typography>

        <Typography>{body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default BlogComment;
