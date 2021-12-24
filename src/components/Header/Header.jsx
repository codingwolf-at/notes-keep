import {useTheme} from "../../hooks";
import "./header.css"

export const Header = () => {
  const {theme, setTheme} = useTheme();

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <div className="header">
      <h1>Notes Keep</h1>
      <div className="header-links">
        <button onClick={switchTheme}>{theme === 'dark' ? "💡 Light" : "🌙 Dark"} Mode</button>
        <a target="_blank" rel="noreferrer" href="https://linktr.ee/codingwolf">About Developer</a>
      </div>
    </div>
  )
}