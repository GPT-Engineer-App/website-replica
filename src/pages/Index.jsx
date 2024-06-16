import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="white" boxShadow="sm" p={4}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">COMVIQ</Heading>
          <Flex align="center">
            <Button variant="ghost" leftIcon={<FaSearch />}>Sök</Button>
            <Button variant="ghost" leftIcon={<FaUserCircle />}>Mitt Konto</Button>
            <Button colorScheme="pink" ml={4}>Tanka</Button>
          </Flex>
        </Flex>
      </Box>

      <Box bg="pink.500" color="white" py={20} textAlign="center">
        <Text fontSize="xl" fontWeight="bold">Spara upp till 1 200 kr</Text>
        <Heading as="h2" size="2xl" my={4}>Säkra sommarsurfen</Heading>
        <Text fontSize="lg">Skaffa stort abonnemang till litet pris! Från 195 kr/mån för 20 GB surf.</Text>
        <Button colorScheme="whiteAlpha" size="lg" mt={6}>Skaffa nu</Button>
      </Box>

      <Image src="/images/banner.jpg" alt="Sandboarding" w="100%" />

      <Box bg="white" py={10}>
        <Heading as="h3" size="lg" textAlign="center" mb={10}>Skaffa mobil med 5G-abonnemang</Heading>
        <Flex justify="space-around" wrap="wrap">
          {[
            { name: "Samsung Galaxy S23", price: "329 kr/mån", label: "Månadens mobil", img: "s23.jpg" },
            { name: "iPhone 15", price: "419 kr/mån", img: "iphone15.jpg" },
            { name: "Samsung Galaxy S24", price: "399 kr/mån", label: "Hörlurar på köpet", img: "s24.jpg" },
            { name: "iPhone 15 Pro Max", price: "599 kr/mån", img: "iphone15promax.jpg" },
          ].map((product, index) => (
            <Box key={index} bg="gray.50" p={4} borderRadius="md" boxShadow="sm" textAlign="center" m={2} flexBasis="22%">
              {product.label && <Text bg="yellow.300" color="black" fontWeight="bold" p={1} borderRadius="md">{product.label}</Text>}
              <Image src={`/images/${product.img}`} alt={product.name} mx="auto" my={4} />
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
              <Button colorScheme="pink" mt={4}>Beställ</Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;