import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

function CartCourse({ selectedCourse, deleteCourse }) {
  return (
    <ListItem>
      <ListItemIcon>
        <IconButton onClick={() => deleteCourse(selectedCourse.id)} aria-label="delete">
          <CloseIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemText
        primary={selectedCourse.name}
        secondary={selectedCourse.date}
      />
    </ListItem>
  );
}

export default CartCourse;
