import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import "./cookieOptIn.css";
import Cookies from "universal-cookie";
import { useAppContext } from "../../context/Context";
import { CookieOptInModal } from "./CookieOptInModal";
import { CookieOptInDrawer } from "./CookieOptInDrawer";

export function CookieOptIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cookies, variant } = useAppContext();

  const cookiesList = new Cookies();

  useEffect(() => {
    if (!cookies) {
      onOpen();
    }
  }, []);

  return (
    <>
      {(cookiesList.get("cookieState") == "false" ||
        cookiesList.get("cookieState") === undefined) && (
        <>
          {variant === "lg" && isOpen ? (
            <CookieOptInDrawer cookiesList={cookiesList} onClose={onClose} />
          ) : (
            <CookieOptInModal isOpen={isOpen} onClose={onClose} />
          )}
        </>
      )}
    </>
  );
}
