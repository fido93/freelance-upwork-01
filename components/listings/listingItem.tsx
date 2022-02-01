import { Box, BoxProps, Text } from '@chakra-ui/react'
import React from 'react'
import Img from '../images/img'

export interface ListingItemProps {
    propertyName: string
    image: {
        url: string
    }
    description: string
    type: string
}
interface Props extends BoxProps, ListingItemProps {
}

function ListingItem(props: Props) {
    const { image, type, propertyName, description } = props
    return (
        <Box {...props} >
            <Img src={image.url} borderRadius={"2em"} h="200px" w="300px" />
            <Box>
                <Text variant="listingType" mt="1em">{type}</Text>
                <Text variant="listingName" mt="2em">{propertyName}</Text>
                <Text variant="listingName" mt="2em">{description}</Text>
            </Box>
        </Box>
    )
}

export default ListingItem
