import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Landing from "../../components/landing/";

const Index: NextPage = () => {
  const sections = [{ id: "top", element: <Landing /> }];
  return (
    <Box>
      {sections.map((s) => (
        <Box bg="#F6F6F6" key={s.id}>
          <section id={s.id}>{s.element}</section>
        </Box>
      ))}
    </Box>
  );
};

export default Index;
