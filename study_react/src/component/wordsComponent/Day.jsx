import dummy from "../../db/data.json"

export default function Day() {

    const day = 1;
    // words 안의 word 중 day 가 1인 word 만 가져옴
    const wordList = dummy.words.filter(word=>(word.day === day));
    console.log(wordList);

    return <>
        <table>
            <tbody>
                {
                    // dummy 안의 words 를 word 로 하나씩 가져온다
                    // word 객체는 각각 5개의 데이터 쌍을 가진다
                    // (id, day, eng, kor, isDone)
                }
                {dummy.words.map(word=>(
                    <tr>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
                {
                    // filter 로 조건에 맞는 word 만 가져올 수 있음
                }
                {wordList.map(word=>(
                    <tr>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}