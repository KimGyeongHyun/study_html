import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './form.css';
import { IDay } from './JsonForm';

export default function CreateWord() {
	const days: IDay[] = useFetch('http://localhost:3001/days');
	const history = useNavigate();
	const [isLoading, setIsLoading] = useState(false); // 로딩 확인

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();

		// 로딩이 되지 않을 때만 단어 생성
		// 느린 인터넷 환경을 위한 코드
		// current 가 없을 때만 동작하게 함 -> ts 에러 처리
		if (!isLoading && dayRef.current && engRef.current && korRef.current) {
			// 로딩 시작
			setIsLoading(true);
			// current 로 해당 요소에 접근
			// console.log(engRef.current.value);
			// console.log(korRef.current.value);
			// console.log(dayRef.current.value);

			const day = dayRef.current.value;
			const eng = engRef.current.value;
			const kor = korRef.current.value;

			// 단어 추가
			fetch('http://localhost:3001/words/', {
				method: 'POST', // 요청 옵션
				headers: {
					// 보내는 리소스 타입
					// 문자열, html, img 등 다양한 타입
					'Content-Type': 'application/json',
				},
				// 실어서 보낼 정보
				// json 문자열로 최종 변환 JSON.stringify
				body: JSON.stringify({
					day: day,
					eng: eng,
					kor: kor,
					isDone: false,
				}),
			}).then((res) => {
				if (res.ok) {
					alert('생성 완료');
					// 어떤 day 에 단어를 입력했는지 추적하고
					// 해당 페이지로 이동
					history(`/day/${day}`);
					setIsLoading(false); // 로딩 끝
				}
			}); // 완료 후 동작
		}
	}

	// useRef 로 dom 에 접근
	// scroll 위치, focus 주거나 등에 사용
	// input, select 태그에 ref 속성으로 부여하면
	// 해당 태그 이벤트에 접근할 수 있음
	const engRef = useRef<HTMLInputElement>(null);
	const korRef = useRef<HTMLInputElement>(null);
	const dayRef = useRef<HTMLSelectElement>(null);

	return (
		<form action=''>
			<div className='input_area'>
				<label>Eng</label>
				<input type='text' placeholder='computer' ref={engRef} />
			</div>
			<div className='input_area'>
				<label>Kor</label>
				<input type='text' placeholder='컴퓨터' ref={korRef} />
			</div>
			<div className='input_area'>
				<label>Day</label>
				<select ref={dayRef}>
					{days.map((day) => (
						<option key={day.id} value={day.day}>
							{day.day}
						</option>
					))}
				</select>
				<button onClick={onSubmit} style={{ opacity: isLoading ? 0.3 : 1 }}>
					{
						// 로딩 상태 표시
						// 저장 버튼 눌리자마자 Saving... 으로 바뀌고
						// 버튼의 onClick 이 작동하지 않음
						isLoading ? 'Saving...' : '저장'
					}
				</button>
			</div>
		</form>
	);
}
