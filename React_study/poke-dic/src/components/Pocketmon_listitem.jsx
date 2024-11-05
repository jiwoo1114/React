import './CSS/Pocketmon_listitem.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classnames from 'classnames'
//import React, {useState} from 'react';

function Pocketmon_listitem({ Pocket, onRemove, onToggle }) {

    const {id,name,img,color} = Pocket

  return (
   
    <Card  border="dark" style={{ width: '18rem' }}
      onDoubleClick={() => onToggle(id)}  // 더블클릭 시 color 값 반대로 바꾸기
       className='Card'>
      {/*color가 트루일 떄는 color 클래스 발동*/ }
      <Card.Img variant="top" src={img} alt={id} className={classnames({ color })} />  
      <Card.Body>
        <Card.Title className={classnames({ color })} >{name}</Card.Title>
        <Card.Text className={classnames({ color })}>
          포켓몬박사 설명요망
        </Card.Text>
        {/*포켓몬 카드 삭제하는 버튼*/ }
        <Button variant="primary" className='remove'onClick={() => {onRemove(id)}}>삭제</Button>
      </Card.Body>
      </Card>
    
);}

export default Pocketmon_listitem;