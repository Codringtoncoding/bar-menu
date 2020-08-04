import React, {useState} from 'react';
import {Preview} from "./Preview/Preview";
import * as styles from "./App.module.scss";
import {Settings} from "./Settings/Settings";

export const App = () => {

  const [selectedTitle, setTitle] = useState("H's cocktail bar");

  return (
    <main className={styles.main}>
        <h1>Bar Menu</h1>
        <Preview selectedTitle ={selectedTitle}/>

        <Settings selectedTitle ={selectedTitle} setTitle ={setTitle}/>
    </main>
  );
};