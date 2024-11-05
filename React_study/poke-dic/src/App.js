import React, { useState, useCallback } from "react";
import Pocketmon from './components/Pocketmon'
import Pocketmon_Insert from "./components/Pocketmon_Insert";
import Pocketmon_list from './components/Pocketmon_list'
import { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  //포켓몬 등록
  const [Pockets, SetPocket] = useState([
    {
      id: 1,
      name: '팬텀',
      img: './images/팬텀.PNG',
      color:true
    },

    {
      id: 2,
      name:'메타몽',
      img: './images/메타몽.PNG',
      color:true
    },
     
     {
      id: 3,
      name: '블래키',
      img: './images/블래키.PNG',
      color:false
    }
  ])

  //ref를 활용하여 고유의 값 ID를 담기
  const nextId = useRef(4)

  //포켓몬 등록하는 함수(pocketmon_insert)
  const onInsert = (name) => { 
    const pocket = {
      id: nextId.current, //id값 가져오기
      name, //name:name
      img:'/images/' + name +'.PNG',
    }
    SetPocket((prevPockets) => [...prevPockets, pocket]);
    nextId.current += 1 //nextId를 1씩 더하기
  }

  //포켓몬 삭제하는 함수(pocketmon_list)
  const onRemove = useCallback((id) => {
    const removedPockets = Pockets.filter((Pocket) => Pocket.id !== id)
    SetPocket(removedPockets)
  },[Pockets])

  //포켓몬 비활성화 활성화 함수(pocketmon_list)
  const onToggle = useCallback((id) => {
  SetPocket((prevPockets) =>
    prevPockets.map((pocket) =>
      pocket.id === id
        ? { ...pocket, color: !pocket.color } // color 값을 반전시킴
        : pocket
    )
  );},[]);

  return (
    <Pocketmon>
      <Pocketmon_Insert onInsert={ onInsert } />
      <Pocketmon_list Pockets={Pockets} onRemove={onRemove} onToggle={onToggle} />
    </Pocketmon>
  
  );
}

export default App;