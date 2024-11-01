import React, { useState } from 'react'

function Quiz03() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])


   const [inputName, setInputName] = useState('') //input창 value
   const [NextId, setNextId] = useState(5) //id 지정해주는 state
   const [inputDept, setinputDept] = useState('') //id 지정해주는 state
   

  const onChangename = (e) =>  setInputName(e.target.value)  //value 값 변경
  const onChangedept = (e) =>  setinputDept(e.target.value)  //value 값 변경
   
   const onClick = () => {
      const nextemploy =employees.concat({
         id: NextId,
         name: inputName,
         dept:inputDept,
      })

      setEmployees(nextemploy)
      setInputName('')
      setNextId(NextId + 1)
      setinputDept('')

   }

    const employeeList = employees.map((employee) => (
      <li key={employee.id} onDoubleClick={() => onRemove(employee.id)}>
         사원명: {employee.name}, 부서: {employee.dept}
      </li>
   ))


   //더블클릭 시 삭제시키는 함수

   const onRemove = (id) => {
      //2번 아이디
      const nextemployees = employees.filter((employee) => employee.id !== id)
      setEmployees(nextemployees)
   }
   

    return (
      <>
         <input type='text' placeholder='이름' value={inputName} onChange={onChangename}></input>
         <input type='text' placeholder='부서' value={inputDept} onChange={onChangedept}></input>
         <button onClick={onClick}>추가</button>
         <ul>{employeeList}</ul>
      </>
   )
}

export default Quiz03
