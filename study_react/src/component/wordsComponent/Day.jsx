import { useEffect, useState } from "react";
import Word from "./Word"
// 주소에서 값을 가져옴
// Route path 주소에서 (:변수) 안의 값을 key:변수, value:str 형식으로 가져옴 
import { useParams } from "react-router-dom";



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
                {
                    // dummy 안의 words 를 word 로 하나씩 가져온다
                    // word 객체는 각각 5개의 데이터 쌍을 가진다
                    // (id, day, eng, kor, isDone)
                }
                {/* {dummy.words.map(word=>(
                    <tr>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))} */}
                {
                    // filter 로 조건에 맞는 word 만 가져올 수 있음
                }
                {words.map(word=>(
                    <Word word={word} key={word.id}/>
                ))}
                </table>

            </tbody>
        </table>
    </>
}