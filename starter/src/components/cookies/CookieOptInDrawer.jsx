import { Box, Center, Image, Stack } from "@chakra-ui/react";
import cookie_icon from "../../images/cookies.webp";
import { AcceptCookiesButton } from "./buttons/AcceptCookiesButton";
import { SecondaryCookieButtons } from "./buttons/SecondaryCookieButtons";
import "./cookieOptIn.css";
import { CookieOptInHeader } from "./CookieOptInHeader";
import { CookieOptInText } from "./CookieOptInText";

export function CookieOptInDrawer({ cookiesList, onClose }) {
  return (
    <Box
      className="stickyBottom"
      zIndex={100}
      w={"100vw"}
      bgColor={"white"}
      borderColor={"black"}
      borderTopWidth={2}
    >
      <Box
        className={"half-circle"}
        bgColor="white"
        position={"absolute"}
        top={-59.9}
        right={window.innerWidth / 2 - 60}
      />
      <Image
        position={"absolute"}
        top={-35}
        right={window.innerWidth / 2 - 35}
        w={70}
        src={cookie_icon}
        alt={
          "Cookie Icon für Cookie opt in der Kieler Webdesign Agentur WebWerk am Meer"
        }
      />
      <Center>
        <Stack pt={10}>
          <CookieOptInHeader />
          <CookieOptInText />
          <Center>
            <Stack spacing={3} w={350}>
              <AcceptCookiesButton
                cookiesList={cookiesList}
                onClose={onClose}
              />
              <SecondaryCookieButtons
                cookiesList={cookiesList}
                onClose={onClose}
              />
            </Stack>
          </Center>
        </Stack>
      </Center>
    </Box>
  );
}
