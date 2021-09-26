import React from "react";
import { motion } from "framer-motion";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import AvatarIconR from "../images/Avtar.png";
import backR from "../images/back.png";
export default function SimpleContainer() {
  return (
    <Grid container style={{ backgroundImage: "url(backR)" }}>
      <Grid item xs={7} style={{ padding: "6%" }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: [0, 1] }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            style={{ marginTop: "70px" }}
            gutterBottom
          >
            HI, I am Ram
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            A FRONT END WEB DEV ...!
          </Typography>
        </motion.div>
        <List
          component="nav"
          style={{ marginTop: "80px" }}
          aria-label="contacts"
        >
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="A Front-end Developer with around 5+ years of experience in building websites and web applications." />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Experience in the banking domain is around 1 year 8 months." />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={4}>
        <img
          src={AvatarIconR}
          alt="avtar"
          style={{
            height: "350px",
            width: "350px",
            borderRadius: "50%",
            margin: "120px",
          }}
        />
      </Grid>
    </Grid>
  );
}
