import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Words.css';
import './table.css';
import { IProps } from './JsonForm';

// 서버에서 가져온 단어를 thead 하나로 구성한다
// 체크박스, 영단어, 뜻, 버튼 2개로 이루어진다
// 체크박스, 삭제 버튼은 해당 단어의 db 를 control 한다
export default function Word({ word: w }: IProps) {
	// 단어 정보를 state 설정
	// 단어 삭제에 사용
	const [word, setWord] = useState(w);
	// 단어 뜻 보기 여부, 초기값은 false (처음엔 단어 뜻을 보지 않는다)
	// word 별로 state 설정이 되어있기 때문에
	// 각 단어별로 단어 뜻 보기 여부를 결정할 수 있고,
	// 다른 창으로 넘어가도, state 가 유지되기 때문에
	// 단어 뜻 보기 여부도 유지된다
	// (단어의 db 는 관련 없음, Word state 만 영향을 줌)
	const [isShow, setIsShow] = useState(false);
	// 단어 암기(체크) 여부를 db에서 가져옴
	// toggleDone 함수에서 db에서 단어 암기 여부를 검사
	// 체크박스 체크 여부, css off class (회색 table) 적용 여부 결정
	// toggleDone 에서 단어 db isDone 변경
	const [isDone, setIsDone] = useState(word.isDone);

	// 단어 뜻 보기 여부 변경
	function toggleShow() {
		setIsShow(!isShow);
	}
	// 단어 암기 여부 db 변경
	function toggleDone() {
		// 단순히 state 만 갱신하면 db 가 갱신이 되지 않는다
		// setIsDone(!isDone);

		// db 갱신
		// Day 에서 전달한 props(word) 사용
		fetch(`http://localhost:3001/words/${word.id}`, {
			method: 'PUT', // 요청 옵션
			headers: {
				// 보내는 리소스 타입
				// 문자열, html, img 등 다양한 타입
				'Content-Type': 'application/json',
			},
			// 실어서 보낼 정보
			// json 은 문자열로 구성되어 있으므로 형변환해야 한다
			// 객체를 json 에 적합하게 형변환 : JSON.stringify
			// 나머지는 그대로, 단어 암기 여부만 바꾼다
			body: JSON.stringify({
				...word,
				isDone: !isDone,
			}),
		}).then((res) => {
			// 완료 후 setIsDone 로 state 를 변경,
			// 갱신된 isDone 데이터로 체크박스 체크 여부와, css 적용 여부를 다시 결정
			if (res.ok) setIsDone(!isDone);
		});
	}

	// 단어 삭제
	// db 안의 단어를 id로 추적하여 삭제, state 로 저장되어 있던 word 의 id 를 0으로 설정
	// word state 가 변경, 재랜더링
	// id 가 0인 단어는 없다고 조건문으로 판단, null 을 리턴
	function del() {
		if (window.confirm('단어를 삭제할까요?')) {
			fetch(`http://localhost:3001/words/${word.id}`, {
				method: 'DELETE',
			}).then((res) => {
				if (res.ok) setWord({ ...word, id: 0 });
			});
		}
	}

	if (word.id === 0) return null;

	return (
		<tr className={isDone ? 'off' : ''}>
			<th>
				<input
					type='checkbox'
					checked={isDone}
					onChange={toggleDone}
					style={{ width: '20px', height: '20px' }}
				/>
			</th>
			<th>{word.eng}</th>
			<th style={{ width: '200px' }}>{isShow && word.kor}</th>
			<th>
				<Button variant='success' onClick={toggleShow}>
					뜻{isShow ? ' 숨기기' : ' 보기'}
				</Button>
				<Button variant='warning' onClick={del}>
					삭제
				</Button>
			</th>
		</tr>
	);
}
