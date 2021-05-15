import React, { useState } from "react";
import "./styles.css";
import style from "./styles.module.css";
import { Button } from "@material-ui/core";

const Demo = () => {
  return <div>Hello World</div>;
};
export default Demo;

export const Demo2 = () => {
  return <div className={style.title}>react-npm-lib-template</div>;
};

export const MyButton = () => {
  const [on, setOn] = useState(false);
  return (
    <Button variant="contained" color="primary" size="large" onClick={() => setOn(!on)}>
      toggle {on ? " on" : " off"}
    </Button>
  );
};
