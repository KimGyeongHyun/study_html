import { useRef } from 'react';
import './componentForm';

// title, body 를 받을 form 태그 리턴
const Create = ({ onCreate }: CreateProps) => {
	// useRef 는 태그의 내용을 가져올 때 사용
	// 제네럴 타입으로 태그 지정하여 선언,
	// 태그 생성 시 선언된 useRef 변수를 태그 속성으로 추가
	const titleRef = useRef<HTMLInputElement>(null);
	const bodyRef = useRef<HTMLTextAreaElement>(null);

	return (
		<article>
			<h2>Create</h2>
			{/* form 태그 : input 정보를 한꺼번에 처리하는 태그 */}

			{/* Create 버튼을 눌렀을 때 (sumbit) 실행되는 코드 */}
			<form
				onSubmit={(event) => {
					// submit 을 하면 페이지가 리로드 되어 버린다
					// 이를 방지함
					event.preventDefault();
					// useRef 를 사용하기 위해선 .current 를 사용하여
					// 태그 속성으로 잘 부여 되었는지 조건문으로 확인해야 함 (ts)
					// 내부 내용 유무는 .current.value 로 내부 내용을 직접 확인하여
					// 조건문에 추가해야 함
					// titleRef.current.value !== ''
					if (
						titleRef.current &&
						bodyRef.current &&
						titleRef.current.value !== '' &&
						bodyRef.current.value !== ''
					) {
						const title = titleRef.current.value;
						const body = bodyRef.current.value;
						onCreate(title, body);
					}
				}}>
				<p>
					<input type='text' name='title' placeholder='title' ref={titleRef}></input>
				</p>
				<p>
					<textarea name='body' placeholder='body' ref={bodyRef}></textarea>
				</p>
				<p>
					<input type='submit' value='Create'></input>
				</p>
			</form>
		</article>
	);
};

export default Create;
