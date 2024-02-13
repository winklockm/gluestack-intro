import React, {useState} from 'react'
import {
    Box,
    Button,
    Center,
    HStack,
    Image,
    Input,
    InputField,
    Text,
    VStack
} from '@gluestack-ui/themed'
import GuestLayout from '../../layouts/GuestLayout'

function Header() {
    return (

        <>
            <Image
                h="$20"
                w="$80"
                alt="gluestack-ui Pro"
                resizeMode="contain"
                source={require('./assets/images/logo.png')}
                sx={{
                    '@md': {
                    display: 'flex',
                    },
                }}
                display="none"
            />
    
            <Image
                sx={{
                    '@md': {
                    display: 'none',
                    },
                }}
                alt="gluestack-ui Pro"
                display="flex"
                source={require('./assets/images/logo.png')}
                w={275}
                h={141}
            />
            </>

    )
}


export default function Dashboard() {
    return (
        
        <GuestLayout>

            <Center w="$full" flex={1}>

                <VStack
                    justifyContent="center"
                    space="md">
                    <Header/>
                    <Box
                        maxWidth={800}
                        w="$full"
                        minHeight={300}
                        sx={{
                            '@md': {
                            px: '$8',
                            bg: '$primary500',
                            },
                        }}
                        px="$4"
                        justifyContent="center">
                            <Text>Hello, World!</Text>
                            <HStack space="md" reversed={false}>
                                <Box w="$20" h="$20" bg="$blue300" />
                                <Box w="$20" h="$20" bg="$blue400" />
                                <Box w="$20" h="$20" bg="$blue500" />
                            </HStack>
                    </Box>
                    
                <Input>
                    <InputField
                    fontSize="$lg"
                    placeholder='Type Stuff Here'
                    />
                </Input>
                    <Button>Click Me</Button>
                </VStack>
            </Center>
            

         </GuestLayout>

    )
}