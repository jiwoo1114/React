import React, { useState } from 'react'

function Quiz01() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])

   const [inputName, setInputName] = useState('')
   const [inputDept, setInputDept] = useState('')
   const [nextId, setNextId] = useState(5)
   const [removeDept,setRemoveDept] = useState('') //삭제할 부서 state

   //각 input 창의 value를 사용자가 입력하는 값으로 변경해주는 함수들
   const onChangeName = (e) => setInputName(e.target.value)
   const onChangeDept = (e) => setInputDept(e.target.value)
   const onChangeRemoveDept = (e) => setRemoveDept(e.target.value)

   //사용자가 입력한 값을 리스트에 추가해주는 함수
   const onClick = () => {
      const nextEmployees = employees.concat({
         id: nextId,
         name: inputName,
         dept: inputDept,
      })
      setNextId(nextId + 1)
      setEmployees(nextEmployees)
      //input창 초기화
      setInputName('')
      setInputDept('')
   }

   const employeeList = employees.map((employee) => (
      <li key={employee.id}>
         사원명: {employee.name}, 부서: {employee.dept}
      </li>
   ))


   //부서명 입력 후 같은 부서명의 항목은 삭제해주는 함수
   const onRemoveDept = () => {
      const nextEmployees = employees.filter((employee) => {
         return employee.dept !== removeDept //사용자가 입력한 데이터랑 같을 시 삭제되는 식
      })
      setEmployees(nextEmployees) //필터링 데이트를 state 변경
      setRemoveDept('') // removeDept 초기화
   }

   return (
      <>
         <input placeholder="사원 이름" value={inputName} onChange={onChangeName} />
         <input placeholder="부서" value={inputDept} onChange={onChangeDept} />
         <button onClick={onClick}>추가</button>

         <input placeholder="삭제할 부서" value={removeDept} onChange={onChangeRemoveDept} />
         <button onClick={onRemoveDept}>부서별 삭제</button>
         <br />
         <ul>{employeeList}</ul>
      </>
   )
}

export default Quiz01
