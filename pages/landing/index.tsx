import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Experience from "../../components/landing/experience";

const Index: NextPage = () => {
  const sections = [{ id: "top", element: <Experience /> }];
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
