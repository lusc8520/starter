import { Spacer, Box } from "@chakra-ui/react";
import { HeaderLink } from "./HeaderLink";
import { ActionButton } from "../buttons/ActionButton";
import { BurgerMenu } from "./BurgerMenu";
import { routes } from "../../constants/routes";
import { useAppContext } from "../../context/Context";
import { Navbar } from "./Navbar";

export function Navigation() {
  const { variant } = useAppContext();

  return (
    <Navbar>
      <Box w={"300px"} h={["50px", "70px", "70px", "70px"]} />
      <Spacer />
      {variant === "lg" ? (
        <>
          {routes.map((service, i) => {
            return <HeaderLink key={i} service={service} />;
          })}
          <Spacer />
          <ActionButton h={"50px"} fontSize={"13px"} href={"/"} />
        </>
      ) : (
        <BurgerMenu />
      )}
    </Navbar>
  );
}
