import React, {useState} from 'react';
import {Preview} from "./Preview/Preview";
import * as styles from "./App.module.scss";
import {Settings, ChangeItem} from "./Settings/Settings";

export const App = () => {

  const [selectedTitle, setTitle] = useState("H's cocktail bar");
  const [selectedItem, setItem] = useState("pizza");

  return (
    <main className={styles.main}>
        <h1>Bar Menu</h1>
        <Preview selectedTitle ={selectedTitle} selectedItem ={selectedItem}/>

        <Settings selectedTitle ={selectedTitle} setTitle ={setTitle}/>
        <ChangeItem selectedItem = {selectedItem} setItem ={setItem}/>

    </main>
  );
};