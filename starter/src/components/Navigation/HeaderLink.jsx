import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/Context";

export function HeaderLink(props) {
  const { service, ...rest } = props;
  const { translate } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <Text
        px={3}
        cursor={"pointer"}
        fontWeight={"semibold"}
        fontSize={"20px"}
        onClick={() => {
          if (service?.link) {
            navigate(service.link);
          } else {
            navigate("/");
          }
        }}
        {...rest}
      >
        {translate(service.name)}
      </Text>
    </>
  );
}
