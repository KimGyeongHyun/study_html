import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import useFetch from '../../hooks/useFetch';
import { IDay } from './JsonForm';

// 날짜를 버튼으로 출력
// 각 버튼에 날짜 정보를 가지는 주소를 구성하고
// 해당 주소로 이동하는 클릭 이벤트 추가
export default function DayList() {
	const navigate = useNavigate();

	// 커스텀 훅 사용
	// useFetch 는 파라미터에서 url 받아 해당 데이터를 리턴
	// '/days' 엔 서버에 저장되어 있는 날짜정보 존재
	const days: IDay[] = useFetch('http://localhost:3001/days');

	// 느린 인터넷 환경에서의 안내
	// 로딩이 될 때까지 days 가 없으므로 days.length 는 0 이다
	// 다만 단어장 안에 단어가 없을 때도 해당 문구가 표시된다
	if (days.length === 0) {
		return <span>Loading...</span>;
	}

	return (
		<div>
			{
				// 서버로부터 받은 날짜 정보를 순회
				// Array 의 map 함수로 날짜 순회
				// {id: number; day: number}
				// 버튼은 Bootstrap button 사용
				// 각 버튼에 날짜 정보를 가지는 이벤트 링크 추가

				days.map((day) => (
					<Button
						key={day.id}
						variant='primary' // 색상
						onClick={() => {
							navigate(`/day/${day.day}`);
						}}
						style={{ margin: '5px' }}>
						Day {day.day}
					</Button>
				))
			}
		</div>
	);
}
