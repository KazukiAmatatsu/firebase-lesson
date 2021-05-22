import React from "react";
import reactDom from "react-dom";
import { firebase } from "./firebase";

function App() {
  // firebase.firestore(); //firestoreを使う
  // firebase.auth(); //認証機能を使う

  const [input, setInput] = React.useState();

  // 追加
  const add = () => {
    firebase.firestore().collection("collectionA").add({
      title: "ボタン押した",
      num: 123,
      bool: false,
      text: input,
    });
  };

  // 削除
  const remove = () => {
    firebase.firestore().collection("collectionA").add({
      title: "ボタン押した",
      num: 123,
      bool: false,
    });
  };

  // 更新
  const update = () => {
    firebase.firestore().collection("collectionA").add({
      title: "ボタン押した",
      num: 123,
      bool: false,
    });
  };

  return (
    <div>
      <h1>firebase </h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={add}>追加</button>
      <button onClick={remove}>削除</button>
      <button onClick={update}>更新</button>
      <button onClick={add}>追加</button>
    </div>
  );
}

export default App;
