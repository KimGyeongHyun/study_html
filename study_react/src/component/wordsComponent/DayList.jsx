import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react";

export default function DayList() {
    // console.log(dummy);
    const navigate = useNavigate();
    const [days, setDays] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/days')
        .then(res=>{return res.json();})
        .then(data=>{setDays(data);});
    }, []);


    // useEffect
    // 상태값이 바뀌었을 때 동작하는 함수 작성 가능
    // 첫번째 매개변수는 함수
    // 랜더링 결과가 실제 돔에 반영된 직후에 실행됨
    // 두번째 매개변수로 배열 전달
    // 배열 안에 갱신될 때 실행될 변수를 넣음

    // 랜더링 이후 API 를 부를 때는 빈배열을 집어 넣음
    // 한 번만 실행됨



    return <>
    <div>
        {
            // dummy 안의 days 를 day 로 하나씩 가져온다
            // day 객체는 각각 id 와 day 를 가진다
        }
        {days.map(day=>(
            <Button key={day.id} variant="primary" onClick={()=>{
                navigate(`/day/${day.day}`);}} style={{margin: "5px"}}>
                Day {day.day}
            </Button>
        ))}
    </div>
    </>
}