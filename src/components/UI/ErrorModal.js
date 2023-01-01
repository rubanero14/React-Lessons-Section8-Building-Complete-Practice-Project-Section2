import React from "react";
// importing {any-name}, for example ReactDOM from React DOM for using Portals capabilities
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import styles from "./ErrorModal.module.css";

const Modal = (props) => {
  return (
    <div style={{ display: props.showModal ? "block" : "none" }}>
      <div className={styles.backdrop} onClick={props.closeModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button buttonType="button" onClick={props.closeModal}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {/* 
          Rendering the above created Modal component into this component and injecting it into targeted element in DOM using .createPortal() method which takes JSX codes as 
          first param and the second param is the target element needs to be portal to in real DOM using vanilla Javascript element selector methods.
          Reminder: Remember to pass props matching each and every JSX element needs needs to be portal as below for the component to work as intended!
      */}
      {ReactDOM.createPortal(
        <Modal
          showModal={props.showModal}
          closeModal={props.closeModal}
          title={props.title}
          message={props.message}
        />,
        document.querySelector("#modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
