import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAppContext } from "../../context/Context";

export function ActionButton(props) {
  const { href, ml, ...rest } = props;

  const [show, setShow] = useState(false);

  const { translate } = useAppContext();

  return (
    <Stack
      px={1.5}
      py={1.5}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      borderRadius={"50vh"}
    >
      <a href={href} target={"_blank"}>
        <Button
          ml={ml}
          h={"70px"}
          fontSize={"18px"}
          w={"300px"}
          textAlign={"center"}
          borderRadius={"50vh"}
          borderWidth={2}
          borderColor={"black"}
          color={"white"}
          bg={"mainColor"}
          _hover={{ bgColor: "mainColor" }}
          textTransform={"uppercase"}
          letterSpacing={2}
          className="parent"
          {...rest}
        >
          {translate("Termin Vereinbaren")}
          {show && <MdKeyboardArrowRight className="child" size={32} />}
        </Button>
      </a>
    </Stack>
  );
}
