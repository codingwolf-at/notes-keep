import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan, faNoteSticky, faStar, faBell} from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import "./SideNav.css";

export const SideNav = () => {
  return (
    <div className="side-nav">
      <NavLink to="/">
        <FontAwesomeIcon icon={faNoteSticky} size="lg" fixedWidth />
      </NavLink>
      <NavLink to="/trash">
        <FontAwesomeIcon icon={faTrashCan} size="lg" fixedWidth />
      </NavLink>
      <NavLink to="/reminder">
        <FontAwesomeIcon icon={faBell} size="lg" fixedWidth />
      </NavLink>
      <NavLink to="/important">
        <FontAwesomeIcon icon={faStar} size="lg" fixedWidth />
      </NavLink>
    </div>
  )
}