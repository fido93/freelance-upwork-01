import {
  Image,
  Flex,
  Text,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import { Layout } from "../base/layout";
import { gql, useQuery } from '@apollo/client'
import ListingItem, { ListingItemProps } from "../listings/listingItem";

const LISTING_QUERY = gql`
{
    listingsCollection{
      items {
        propertyName
        image {
          url
        }
        description
        type
      }
    }
  }
`

export default function Listings() {
  const { data, error, loading } = useQuery(LISTING_QUERY)
  return (
    <Layout>
      <Text variant="pageSubtitle">Best Choice</Text>
      <Text variant="pageTitle">Popular Residence</Text>
      {
        loading
          ? <Spinner />
          : error
            ? <Text color="red">{JSON.stringify(error)}</Text>
            : <Flex pt={{ base: "4em", md: "4em" }} flexWrap={"wrap"} justifyContent={{ md: "space-between", base: "flex-start" }}>
              {data.listingsCollection.items.map((l: ListingItemProps, i: number) => <ListingItem key={i} {...l} />)}
            </Flex>

      }
    </Layout>
  );
}



