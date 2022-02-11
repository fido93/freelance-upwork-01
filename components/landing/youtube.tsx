import React from "react";
import {
  Stack,
} from "@chakra-ui/react";

const Youtube = () => {
  return (
    <>
      <Stack as="section">
        <iframe
          style={{ position: "relative", height: "1000px" }}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/Q79dvrQ7qFg"
          allowFullScreen
        />
      </Stack>
    </>
  );
};

export default Youtube;
