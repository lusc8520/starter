import {
  Stack,
  Text,
  Center,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import "./cookieOptIn.css";
import cookie_icon from "../../images/cookies.webp";
import { cookieText } from "./cookieText";
import { AcceptCookiesButton } from "./buttons/AcceptCookiesButton";
import { SecondaryCookieButtons } from "./buttons/SecondaryCookieButtons";
import { CookieOptInHeader } from "./CookieOptInHeader";

export function CookieOptInModal({ isOpen, onClose, cookiesList }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      size={"xl"}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <Center>
          <Image
            pt={5}
            w={70}
            src={cookie_icon}
            alt={
              "Cookie Icon für Cookie opt in der Kieler Webdesign Agentur WebWerk am Meer"
            }
          />
        </Center>
        <CookieOptInHeader />
        <ModalBody>
          <Text fontSize={16} textAlign={"center"}>
            {cookieText}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Stack spacing={3} w={"100%"}>
            <AcceptCookiesButton
              cookiesList={cookiesList}
              onClose={onClose}
              w={"100%"}
            />
            <SecondaryCookieButtons
              cookiesList={cookiesList}
              onClose={onClose}
            />
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
