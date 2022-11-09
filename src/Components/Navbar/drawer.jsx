import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      // backgroundColor: "#101010",
    },
    list: {
      width: "60vw",
      height: "100%",
      background:" rgb(255,255,255)",
      background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 56%, rgba(238,238,238,1) 100%)",
    
      [theme.breakpoints.down("xs")]: {
        width: "60vw",
      },
    },
    drawer_link: {
      textDecoration: "none",
      color: "black",
      fontSize:"18px",
      fontFamily:"Poppins"
    },
    fullList: {
      width: "auto",
      border: "1px",
    },
    button: {
      display: "none",
      [theme.breakpoints.down(800)]: {
        display: "inline-block",
      },
    },
  })
);

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List key={100}>
        <ListItem key={200}>
          <ListItemIcon key={300}>
            <CloseIcon
            key={400}
              onClick={toggleDrawer(anchor, false)}
              style={{ cursor: "pointer", color: "white" }}
            />
          </ListItemIcon>
        </ListItem>
        {["Home", "Shop", "About", "Contact"].map(
          (text, index) => (
            <a  key={74} className={classes.drawer_link}>
              <ListItem button onClick={()=>{navigateTo(index)}}  key={index+5}>
                <ListItemText  key={index+15} primary={text} />
              </ListItem>
              <Divider/>
            </a>
          )
        )}
      </List>
    </div>
  );


var navigate=useNavigate()

  const navigateTo=(path)=>{
    console.log(path)
    switch (path) {
      case 0:
        navigate("/")
        break;
     
      case 1:
        navigate("/shop")
        break;
     
      case 2:
        navigate("/about")
        break;
     
      case 3:
        navigate("/contact")
        break;
     
    }
  }



  return (
    <div>
      {["left"].map((anchor,index) => (
        <React.Fragment key={anchor}>
          <Button
          key={index}
            onClick={toggleDrawer(anchor, true)}
            style={{ color: "white" }}
            className={classes.button}
          >
            <MenuIcon key={index+1} />
          </Button>
          <Drawer
          key={index+2}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={classes.drawer}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
