import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './Words.css'

// 단어 한 개를 table thead 하나로 구성한다
// 체크박스, 영단어, 뜻, 버튼 2개로 이루어진다
export default function Word({word}) {

    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone)

    function toggleShow() {setIsShow(!isShow);}
    function toggleDone() {setIsDone(!isDone);}

    return <>
    <thead>
    <tr className={isDone ? "off" : ""}>
        <th><input type="checkbox" checked={isDone}
        onChange={toggleDone}
        style={{width:"20px", height:"20px"}}/></th>
        <th>{word.eng}</th>
        <th style={{width: "200px"}}>{isShow && word.kor}</th>
        <th>
            <Button variant="success" onClick={toggleShow}>뜻 
            {isShow ? " 숨기기" : " 보기"}
            </Button>
            <Button variant="warning">삭제</Button>
        </th>
    </tr>
    </thead>
    </>
}