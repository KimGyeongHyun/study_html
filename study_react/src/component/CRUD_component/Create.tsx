import { useRef } from 'react';
import './componentForm';

// title, body 를 받을 form 태그 리턴
const Create = ({ onCreate }: CreateProps) => {
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
					// 여기서의 event.target 은 form 태그
					// 아래와 같이 값을 쉽게 가져올 수 있음
					if (titleRef.current && bodyRef.current) {
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
