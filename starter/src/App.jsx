import { Stack } from "@chakra-ui/react";
import { CookieOptIn } from "./components/cookies/CookieOptIn";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <CookieOptIn />
      <Stack h={"100vh"}>
        <div>hi</div>
        <Navigation />
        <Footer />
      </Stack>
    </>
  );
}

export default App;
