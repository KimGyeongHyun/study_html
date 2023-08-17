import Word from './Word';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { IWord } from './JsonForm';

// 해당 날짜에 대한 단어 정보를 서버로부터 받아 와서 table 형식으로 출력
export default function Day() {
	// DayList 의 Day 1 버튼을 누르면 'day/1' 링크로 주소가 이동한다
	// MyBrouserRouter 에서 현재 주소를 읽고 Routes 에서 판단한다
	// Route 의 path='/day/:day' 형식에 따라 day 뒤에 있는 주소를 str 형식으로 읽어온다
	// useParams 함수에서 key:day, value:"1" 의 형식으로 리턴된다

	// 주소에서 day 추출 (string 형식)
	const { day } = useParams<{ day: string }>();

	// 커스텀 훅으로 db data 가져옴
	//
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
