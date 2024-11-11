import React,{ useState, useEffect} from "react";

function Chapter6() { 

    const [name, Setname] = useState('')
    const [nickname, Setnickname] =useState('')
    
    const onChangname = (e) => Setname(e.target.value)
    const onChangNickname = (e) => Setnickname(e.target.value)
    
    //useEffect는 언제 실행되는지 시점을 정확하게 알아야함!
    //1.컴포넌트가 렌더링 될 때마다(렌더링 직후에)실행(state가 바뀔 때마다)
    useEffect(() => {
        console.log('렌더링이 완료되었습니다')
        console.log(name,nickname)
    }) 

   // 2. 맨 처음 렌더링 될 때만 실행되고, 업데이트(리렌더링) 될 때는 실행되지 않음
    //처음 창 킬 때 렌더링 되는데 초기값이 빈문자열이니 콘솔에 빈문자열 출력
    useEffect(() => {
        console.log('렌더링이 완료되었습니다')
        console.log(name,nickname)
    }, []) 

    // 3. 특정 값이 변경될때만 호출(name state가 렌더링 된 직후)
    //name값 변경되는 값,nickname은 해당사항이 없으니 초기값 ''출력
    useEffect(() => {
        console.log('렌더링이 완료되었습니다')
        console.log(name,nickname)
    }, [name]) 

    //4.뒷정리 함수

    useEffect(() => {
        //렌더링 직후 콘솔에 출력하는 코드
        console.log('렌더링이 완료되었습니다')
        console.log(name, nickname)
        
        //리렌더링 되기 직전 콘솔에 출력하는 코드
        return () => {
            console.log('컴포넌트가 업데이트 되기 전..')
            console.log(name)
        }
    }) 

    //4.뒷정리함수-2
    useEffect(() => {
        //렌더링 직후 콘솔에 출력하는 코드
        console.log('렌더링이 완료되었습니다')
        console.log(name, nickname)
        
        //리렌더링 되기 직전 콘솔에 출력하는 코드 
        return () => {
            console.log('컴포넌트가 업데이트 되기 전..')
            console.log(name)
        }
    },[name])


    return (
        <div>
            <div>
                <input type="text" placeholder="name" value={name} onChange={onChangname}/>
                <input type="text" placeholder="nickname" value={nickname} onChange={onChangNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:{name} </b>
                </div>
                <div>
                    <b>닉네임:{nickname}</b>
                </div>
            </div>
        </div>
    )
}

export default Chapter6