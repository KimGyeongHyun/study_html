import { useEffect, useState } from "react";
import Word from "./Word"
// 주소에서 값을 가져옴
// Route path 주소에서 (:변수) 안의 값을 key:변수, value:str 형식으로 가져옴 
import { useParams } from "react-router-dom";

// 여러 개의 Word 를 table 로 구성하여 출력
export default function Day() {
    const day = Number(useParams().day);
    // const wordList = dummy.words.filter(word=>(word.day === day));
    // console.log(wordList);
    const [words, setWords] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res=>{return res.json();})
        .then(data=>{setWords(data);});
    }, [day])

    return <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                <table>
                {words.map(word=>(
                    <Word word={word} key={word.id}/>
                ))}
                </table>

            </tbody>
        </table>
    </>
}