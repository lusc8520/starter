import { useLocalStorage } from "../hooks/localStorage.ts";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useToast } from "@chakra-ui/react";

export type CatPicture = {
  id: string;
};

type CatData = {
  allCats: CatPicture[];
  currentCat: CatState;
  fetchCat: () => void;
  setCatState: (catState: CatState) => void;
  saveCat: (cat: CatPicture) => void;
  deleteCat: (id: string) => void;
};

export type CatState = "error" | CatPicture | "loading";

const CatContext = createContext<CatData>({
  allCats: [],
  currentCat: "loading",
  fetchCat: () => {},
  setCatState: () => {},
  saveCat: () => {},
  deleteCat: () => {},
});

const url = "https://api.thecatapi.com/v1/images/search";

export function CatProvider({ children }: { children: ReactNode }) {
  const { value: allCats, updateState } = useLocalStorage<CatPicture[]>(
    "cat-pictures",
    []
  );
  const [currentCat, setCurrentCat] = useState<CatState>("loading");
  const toast = useToast();

  useEffect(() => {
    fetchCat();
  }, []);

  useEffect(() => {
    console.warn(currentCat);
  }, [currentCat]);

  function fetchCat() {
    setCurrentCat("loading");
    fetch(url)
      .then((response) => response.json())
      .then((cats) => {
        setCurrentCat({ id: cats[0].id });
      })
      .catch(() => setCurrentCat("error"));
  }

  function saveCat(cat: CatPicture) {
    if (allCats.some((c) => c.id === cat.id)) {
      toast({
        title: "You already saved this cat",
        status: "error",
        duration: 1000,
      });
      return;
    }
    updateState((prev) => [cat, ...prev]);
  }

  function deleteCat(id: string) {
    updateState((prev) => prev.filter((cat) => cat.id !== id));
  }

  function setCatState(catState: CatState) {
    setCurrentCat(catState);
  }

  return (
    <CatContext.Provider
      value={{
        allCats,
        currentCat,
        fetchCat,
        setCatState,
        saveCat,
        deleteCat,
      }}
    >
      {children}
    </CatContext.Provider>
  );
}

export function useCats() {
  return useContext(CatContext);
}
