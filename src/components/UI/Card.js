import React from "react";

/* 
    Using CSS modules, import as per JS object method, where styles acts as object [can name anything btw], 
    and access the classes respectively by accessing this object. CSS Modules acts a scoped styled in React, similar to <style scoped></style> in Vue
*/
import styles from "./Card.module.css";

// props.children in React is similar to <slot/> in Vue, allows to inject full markup into the component
// props.className is class props passed down from parent component (if any) to be applied togther with the existing card classes
/* 
    props.className can be renamed anything like props.classes or props.styles, which depends on the props key passed down into this component from parent component, 
    choosing props.className just to be semanctically correct
*/
const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
