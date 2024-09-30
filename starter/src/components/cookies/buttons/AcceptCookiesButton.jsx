import { Button } from "@chakra-ui/react";
import { useAppContext } from "../../../context/Context";

export function AcceptCookiesButton({ cookiesList, onClose, ...rest }) {
  const { setCookies, translate } = useAppContext();
  return (
    <Button
      bgColor={"mainColor"}
      _hover={{ bgColor: "mainColor" }}
      color="white"
      borderWidth={2}
      borderColor={"black"}
      size="md"
      w={350}
      onClick={() => {
        cookiesList.set("cookieState", true, { path: "/" });
        setCookies(true);
        onClose();
      }}
      {...rest}
    >
      {translate("Cookies akzeptieren")}
    </Button>
  );
}
