import Word from './Word';
// 주소에서 값을 가져옴
// Route path 주소에서 (:변수) 안의 값을 key:변수, value:str 형식으로 가져옴
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { IWord } from './JsonForm';

// 여러 개의 Word 를 table 로 구성하여 출력
export default function Day() {
	// 어떤 파라미터를 사용할지 파라미터처럼 적용 (제네릭)
	const { day } = useParams<{ day: string }>();
	// const wordList = dummy.words.filter(word=>(word.day === day));
	// console.log(wordList);

	// useEffect 로 db data 가져옴
	// const [words, setWords] = useState([]);
	// useEffect(()=>{
	//     fetch(`http://localhost:3001/words?day=${day}`)
	//     .then(res=>{return res.json();})
	//     .then(data=>{setWords(data);});
	// }, [day]);

	// 커스텀 훅으로 db data 가져옴
	const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

	return (
		<>
			<h2>Day {day}</h2>
			{
				// 느린 인터넷 속도를 위한 loading 문구
				words.length === 0 && <span>Loading...</span>
			}
			<table>
				<tbody>
					{words.map((word) => (
						// 단어를 props 로 전달
						// Word 에서 구현
						<Word word={word} key={word.id} />
					))}
				</tbody>
			</table>
		</>
	);
}
