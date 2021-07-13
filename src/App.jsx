import React from 'react';
import { firebase } from './firebase';

function App() {
  // firebase.firestore(); //firestoreを使う
  // firebase.auth(); //認証機能を使う

  const [input, setInput] = React.useState('');
  const [data, setData] = React.useState([]);

  // 追加
  // const add = () => {
  //   firebase.firestore().collection('collectionA').add({
  //addするとランダムIDで追加する
  //     title: 'ボタン押した',
  //     num: 123,
  //     bool: false,
  //     text: input,
  //   });
  // };
  const add = () => {
    firebase.firestore().collection('collectionA').doc('idddd').set({
      //setするとその中身になる
      title: 'ボタン押した',
      num: 123,
      bool: false,
      text: input,
    });
  };

  // 削除
  const remove = () => {
    firebase.firestore().collection('collectionA').doc('idddd').delete()({
      title: 'ボタン押した',
      num: 123,
      bool: false,
    });
  };

  // 更新
  const update = () => {
    firebase.firestore().collection('collectionA').doc('idddd').update({
      text: 'テキストだけ書き換えたよ',
    });
  };
  // const update = () => {
  //   firebase.firestore().collection('collectionA').doc('idddd').set({
  //     title: 'ボタン押した',
  //     num: 123,
  //     bool: false,
  //     text: 'テキスト以外も設定したよ',
  //   });
  // };

  // 取得
  const getData = () => {
    firebase
      .firestore()
      .collection('collectionA')
      .doc('idddd')
      .get()
      .then((doc) => {
        console.log(doc.data());
        console.log(doc.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 全取得
  const getAllData = async () => {
    // firebase
    // .firestore()
    // .collection('collectionA')
    // .get()
    // .then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.data());
    //   });
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    const fetchData = await firebase
      .firestore()
      .collection('collectionA')
      .get();
    const fetchDatas = fetchData.docs.map((doc) => doc.data());
    setData(fetchDatas);
    // console.log(fetchData);
    // console.log(fetchDatas);
  };

  // データの監視
  const observe = () => {
    firebase
      .firestore()
      .collection('collectionA')
      .onSnapshot((snapshot) => {
        const fetchDatas = snapshot.docs.map((doc) => doc.data());
        setData(fetchDatas);
      });
  };

  console.log(data);

  return (
    <div>
      <h1>firebase </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>追加</button>
      <button onClick={remove}>削除</button>
      <button onClick={update}>更新</button>
      <button onClick={getData}>取得</button>
      <button onClick={getAllData}>全取得</button>
      <button onClick={observe}>監視</button>
    </div>
  );
}

export default App;
