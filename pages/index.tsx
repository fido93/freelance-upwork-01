import type { NextPage } from "next";
import Hero from "../components/top/hero";
import FeatureOffering from "../components/top/feature";
import Testimonials from "../components/top/testimonials";
import ContactUs from "../components/top/contactUs";
import { Box } from "@chakra-ui/react";
import Listings from "../components/top/listings";
import Values from "../components/top/value";
import Team from "../components/top/team";

const Home: NextPage = () => {
  const sections = [
    { id: "top", element: <Hero /> },
    { id: "featureOffering", element: <FeatureOffering /> },
    { id: "listings", element: <Listings /> },
    { id: "values", element: <Values /> },
    { id: "testimonials", element: <Testimonials />, noPt: true },
    { id: "teams", element: <Team /> },
    { id: "contactUs", element: <ContactUs /> },
  ];
  const calcPt = (noPt: boolean | undefined, val: string) =>
    noPt ? "0px" : val;
  return (
    <Box overflow={"hidden"}>
      {sections.map((s) => (
        <Box
          bg="#F6F6F6"
          _notFirst={{
            pt: { base: calcPt(s.noPt, "100px"), md: calcPt(s.noPt, "200px") },
          }}
          key={s.id}
        >
          <section id={s.id}>{s.element}</section>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
