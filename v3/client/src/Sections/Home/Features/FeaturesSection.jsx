import { Button, Flex, Text } from '@chakra-ui/react'
import Documentation_Creation from './components/Documentation_Creation'
import Generative_Ai from './components/Generative_Ai'
const FeaturesSection = () => {
  return (
    <>
      <Flex bgColor={'#080219'}
        display={'flex'} py={'2vh'}
        flexDirection={'column'} justifyContent={'center'}
        alignItems={'center'} gap={'2vh'}
        position={'relative'}
      >
        <Button bgColor={'#22284c'} textColor={'#4350a4'}
          w={'fit-content'} rounded={'full'}
          _hover={{
            bgColor: '#8445c6',
            textColor: 'white'
          }}
          // zIndex={50}
          py={{ lg: '3vh' }}
          fontSize={{ md: 'xl', lg: '2xl', base: 'md' }}
          transition={'all ease 0.9s'}
          fontFamily={'Montserrat'}
          >Features</Button>
        <Text
          textColor={'gray.100'}
          fontSize={{ md: 'xl', lg: '2xl', base: 'md' }}
          fontFamily={'Montserrat'}
          flexWrap={'nowrap'}
          textAlign={'center'}>
          Unlock Your Creative Potential
        </Text>
        <Text
          bgGradient={'linear(to-b, #8d94bc, #8b85aa)'}
          bgClip="text"
          fontSize={{ md: 'xl', lg: 'xl', base: 'xs' }}
          fontFamily={'Montserrat'}
          flexWrap={'nowrap'}
          textAlign={'center'}>
          Effortlessly transform code snippets into
          comprehensive and professional documentation
        </Text>

        <Flex display={'flex'}
          flexDir={{ lg: 'row', base: "column" }}
          p={{ base: '2vw', lg: '2vw' }}
          h={'full'}
          userSelect={'none'}
          // bgColor={'#0f1121'}
          gap={{ base: '2vh', lg: '3vw' }}
          justifyContent={'center'} alignItems={'center'}>
          <Documentation_Creation />
          <Generative_Ai />
        </Flex>
      </Flex>
    </>
  )
}

export default FeaturesSection
