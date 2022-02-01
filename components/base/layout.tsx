import { Container, ContainerProps } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props extends ContainerProps { }

export const Layout: FC<Props> = (props: Props) => {
    const { children } = props

    return (
        <Container {...props} maxW="7xl">
            {children}
        </Container>
    )
}

export const PageLayout: FC<Props> = (props: Props) => {
    const { children } = props

    return (
        <Container {...props} maxW="7xl">
            {children}
        </Container>
    )
}

