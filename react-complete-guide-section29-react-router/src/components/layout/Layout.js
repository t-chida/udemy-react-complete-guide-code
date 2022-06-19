import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { Switch } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
