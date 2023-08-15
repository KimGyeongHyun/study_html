import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import useFetch from '../../hooks/useFetch';
import { IDay } from './JsonForm';

// 날짜를 버튼으로 출력
// 각 버튼에 날짜 정보를 가지는 주소를 구성하고
// 해당 주소로 이동하는 클릭 이벤트 추가
export default function DayList() {
	// console.log(dummy);
	const navigate = useNavigate();

	// useEffect
	// 상태값이 바뀌었을 때 동작하는 함수 작성 가능
	// 첫번째 매개변수는 함수
	// 랜더링 결과가 실제 돔에 반영된 직후에 실행됨
	// 두번째 매개변수로 배열 전달
	// 배열 안에 갱신될 때 실행될 변수를 넣음

	// 랜더링 이후 API 를 부를 때는 빈배열을 집어 넣음
	// 한 번만 실행됨

	// const [days, setDays] = useState([]);
	// useEffect(()=>{
	//     fetch('http://localhost:3001/days')
	//     .then(res=>{return res.json();})
	//     .then(data=>{setDays(data);});
	// }, []);

	// 커스텀 훅 사용
	// 외부 js에서 url 받아 해당 데이터를 json 형태로 리턴
	const days: IDay[] = useFetch('http://localhost:3001/days');

	// 느린 인터넷 환경에서의 안내
	if (days.length === 0) {
		return <span>Loading...</span>;
	}

	return (
		<>
			<div>
				{days.map((day) => (
					<Button
						key={day.id}
						variant='primary'
						onClick={() => {
							navigate(`/day/${day.day}`);
						}}
						style={{ margin: '5px' }}>
						Day {day.day}
					</Button>
				))}
			</div>
		</>
	);
}
