import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderLink } from "./HeaderLink";
import { routes } from "../../constants/routes";

export function BurgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = useBreakpointValue({ base: 32, sm: 40, md: 40 });

  return (
    <>
      <GiHamburgerMenu
        color={"mainColor"}
        size={size}
        onClick={() => (isOpen ? onClose() : onOpen())}
        cursor={"pointer"}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalBody px={0} w={"100%"}>
            <Stack>
              {routes.map((service, i) => {
                return <HeaderLink key={i} service={service} />;
              })}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
