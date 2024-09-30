import { Stack, Text, Box, HStack, Heading } from "@chakra-ui/react";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";
import { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/Navigation";
import { useAppContext } from "../../context/Context";

export function Imprint() {
  const { paddingX } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <Stack
        px={paddingX}
        py={[10, 15, 20, 20]}
        mt={10}
        fontWeight={"bold"}
        fontSize={20}
        textAlign="left"
      >
        <Heading as="h1" fontSize={35}>
          IMPRESSUM
        </Heading>
        <Box h={1} w={120} bgColor={"mainColor"} />
        <Text fontWeight={"extrabold"}>[UNTERNEHMENSNAME]</Text>
        <Text>
          [STRAßE] [HAUSNUMMER]
          <br />
          [PLZ] [ORT]
        </Text>
        <br />
        <HStack
          _hover={{ color: "mainColor" }}
          cursor={"pointer"}
          onClick={() => (window.location = "tel:017641947756")}
        >
          <ImMobile size={25} />
          <Text fontSize={20}>[TELEFONNUMMER]</Text>
        </HStack>
        <HStack
          _hover={{ color: "mainColor" }}
          cursor={"pointer"}
          onClick={() => (window.location = "mailto:info@kroll-bau.com")}
        >
          <AiOutlineMail size={25} />
          <Text>[KONTAKT EMAIL]</Text>
        </HStack>
        <br />
        <Text>
          Geschäftsführer:
          <br />
          [NAME]
        </Text>
        <br />
        <Text>
          {/* Amtsgericht Kiel - HRB 3988 */}
          {/* <br />
            USt - IdNr.: DE XXX XX XX XX <br />
            Steuer-Nr. XX/XXX/XX/XXX Finanzamt Kiel-Süd */}
        </Text>
        <br />
        <br />
        <Text fontSize={[25, 25, 30, 35]}>HAFTUNGSHINWEIS</Text>
        <Box h={1} w={200} bgColor={"mainColor"} />
        <br />
        <Text>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </Text>
        <br />
        <br />
        <Text fontSize={[20, 25, 30, 35]}>
          GESTALTUNG, KONZEPTION, TECHNISCHE UMSETZUNG
        </Text>
        <Box h={1} w={650} maxWidth={"70vw"} bgColor={"mainColor"} />
        <br />
        <Text>
          WebWerk am Meer <br />
          Webdesign- und Webentwicklung
          <br />
          <br />
          <HStack
            cursor="pointer"
            as={"a"}
            href={"https://webwerk-am-meer.de"}
            target={"_blank"}
          >
            <MdWebAsset size={40} />
            <a href={"https://webwerk-am-meer.de"} target={"_blank"}>
              www.webwerk-am-meer.de
            </a>
          </HStack>
        </Text>
      </Stack>
      <Footer />
    </>
  );
}
