import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const history = useNavigate();

    function addDay(e: React.FormEvent) {
        e.preventDefault();

        // 단어 추가
        fetch('http://localhost:3001/days/', {
            method: "POST",  // 요청 옵션
            headers: {
                // 보내는 리소스 타입
                // 문자열, html, img 등 다양한 타입
                "Content-Type" : "application/json",
            },
            // 실어서 보낼 정보
            // json 문자열로 최종 변환 JSON.stringify
            body: JSON.stringify({
                day: days.length + 1,
            }),
        })
        .then(res=>{if(res.ok) {
            alert("생성 완료");
            // 어떤 day 에 단어를 입력했는지 추적하고
            // 해당 페이지로 이동
            history('/');
        };});    // 완료 후 동작
    
    }

    return <div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
    </div>
}