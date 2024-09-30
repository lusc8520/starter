import { HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { footer } from "../../constants/footer";
import { useAppContext } from "../../context/Context";
import { FooterBar } from "./FooterBar";

export function Footer() {
  const navigate = useNavigate();
  const { translate, paddingX } = useAppContext();

  return (
    <FooterBar>
      {footer.map((footer, i) => {
        return (
          <Text
            key={i}
            color={"black"}
            fontWeight={"semibold"}
            cursor={"pointer"}
            onClick={() => {
              navigate(footer.link);
            }}
          >
            {translate(footer.name)}
          </Text>
        );
      })}
    </FooterBar>
  );
}
