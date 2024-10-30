

//1.컴포넌트 작성 시 파일명을 대문자로 시작
//2.화살표 함수나 function 함수로 작성
//3.함수명은 파일명으로 똑같이 작성(대체적으로 이렇게 많이 사용~)
//4.외부에서 컴포넌트를 사용하기 위해 마지막에 무조건 export 해준다

import PropTypes from 'prop-types'

//태그 사이의 내용은 key 값을 children으로 출력
const Mycomponent = (props) => {

    /*
    props = {name:'하서', job:'강사',forNumber:1,children:'맑음'}
    */

    //json 객체 비구조화 할당 
    //props 생략 가능
    const { name, job, forNumber, children } = props
    
    console.log(props)
    return (
        <div>
            <div>안녕하세요. 제 이름은 {name} 입니다.</div>
            <div>제 직업은 {job} 입니다. 숫자는 {forNumber}</div>
            <div>children 값은 {children} 입니다.</div>
        </div>
    )
}


/*
기본값 지정하는 법

나중에 사라질 방식
Mycomponent.defaultProps = {
    name: '기본이름',
    job:'학생'
}*/

//console.log(props)
//const { name= '기본이름', job='강사',forNumber,children} =props

//const MyComponent = ({ name = '기본이름', job = '강사', forNumber, children }) => { }

    

//속성값의 타입 검증
//isRequired:속성값을 필수값으로 만들어줌

//타입 검증
 Mycomponent.propTypes = {
    name: PropTypes.string,
    forNumber:PropTypes.number.isRequired,
}

export default Mycomponent