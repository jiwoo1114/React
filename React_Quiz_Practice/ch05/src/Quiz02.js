import React, { useState } from 'react'

function Quiz02() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])
    
   const [inputName, setInputName] = useState('')
   const [inputStates, setInputStates] = useState('미완료')
   const [nextId, setNextId] = useState(3)



   //input창 value 
   const onChangename = (e) => setInputName(e.traget.value)
    //select 박스에서는 option 태그의 value속성값을 가져온다
   const onChangenstatus = (e) => setInputStates(e.traget.value)

   const onClick = () => {
      const nextProjects = projects.concat({
      id: nextId,
      name: inputName,
      status: inputStates,      
      })

      //추가된 값으로 projects state 변경
      setProjects(nextProjects)

      //초기화
      setInputName('')
      setInputStates('미완료')
      setNextId()
   }
   //삭제하는 함수
    const onRemove = (id) => {
      const nextProjects = projects.filter((project) => project.id !== id)
      setProjects(nextProjects)
   }

   //더블클릭시 삭제하는 함수 실행
   const projectList = projects.map((project) => (
      <li key={project.id} onDoubleClick={() => onRemove(project.id)}>
         프로젝트명: {project.name}, 상태: {project.status}
      </li>
   ))


   return (
      <>
         <input placeholder='프로젝트 이름' value={inputName} onChange={onChangename}></input>
         <select value={inputStates} onChange={onChangenstatus}>
            <option value="미완료">미완료</option>
            <option value="완료">완료</option>
         </select>
         <button onClick={onClick}>추가</button>   
         <ul>{projectList}</ul>
      </>
   )
}

export default Quiz02
