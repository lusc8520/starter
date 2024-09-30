import { useState, useContext, createContext, useEffect } from "react";
import { germanTextCollection } from "../translations/de.js";
import Cookies from "universal-cookie";
import ReactGA from "react-ga";
import { useBreakpointValue } from "@chakra-ui/react";

const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(2);

  const textCollection = germanTextCollection;

  const translate = (word) => {
    return textCollection[word] ?? word;
  };

  const paddingX = [5, 7, "30px", "30px"];

  const cookiesList = new Cookies();
  let cookieState;
  if (cookiesList.get("cookieState") === "true") {
    cookieState = true;
  } else {
    cookieState = false;
  }
  const [cookies, setCookies] = useState(cookieState);

  console.warn(
    "Cookie : ",
    cookiesList.get("cookieState"),
    "cookiesList: ",
    cookiesList,
    "cookieState : ",
    cookieState,
    "cookies: ",
    cookies
  );

  useEffect(() => {
    if (cookies) {
      ReactGA.initialize("G-NLRVBQ52C2");
      ReactGA.event({
        category: "Cookie OptIn",
        action: "Cookies Zustimmung erhalten",
        label: "Zustimmung",
      });
    }
  }, [cookies]);

  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <Context.Provider
      value={{
        state,
        setState,
        translate,
        textCollection,
        cookies,
        setCookies,
        variant,
        paddingX,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useAppContext() {
  return useContext(Context);
}
