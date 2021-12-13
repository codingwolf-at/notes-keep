import { useContext } from "react"
import { themeContext } from "../contexts"

export const useTheme = () => {
  const {theme, setTheme} = useContext(themeContext);
  return {theme, setTheme};
}