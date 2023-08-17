import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Words.css';
import './table.css';
import { IProps } from './JsonForm';

// 단어 한 개를 thead 하나로 구성한다
// 체크박스, 영단어, 뜻, 버튼 2개로 이루어진다
export default function Word({ word: w }: IProps) {
	const [word, setWord] = useState(w);
	const [isShow, setIsShow] = useState(false);
	const [isDone, setIsDone] = useState(word.isDone);

	function toggleShow() {
		setIsShow(!isShow);
	}
	// 단어 암기 여부를 db 에 갱신
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
			// json 문자열로 최종 변환 JSON.stringify
			body: JSON.stringify({
				...word,
				isDone: !isDone,
			}),
		}).then((res) => {
			if (res.ok) setIsDone(!isDone);
		}); // 완료 후 동작
	}

	// 단어 삭제
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
