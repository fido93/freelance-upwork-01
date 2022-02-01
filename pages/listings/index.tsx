import { Text } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/base/layout'

interface Props { }

function Index(props: Props) {
    const { } = props

    return (
        <Layout>
            <Text variant="heroTitle" color={"black"}>Listing page</Text>
        </Layout>
    )
}

export default Index
