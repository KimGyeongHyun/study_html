import './componentForm';

const Nav = ({ onChangeMode, topics }: NavProps) => {
	const lis = [];

	// 반복문으로 props 배열의 객체 하나씩 불러옴
	for (let i = 0; i < topics.length; i++) {
		let t = topics[i];
		// react 에서 자동으로 생성하는 태그는 key 속성을 반드시 구별하여 줘야 함
		lis.push(
			<li key={t.id}>
				{
					/* 태그 속성을 부여하면 숫자도 문자열로 들어감 */
					// 따라서 태그에서 숫자를 뽑아 쓰고 싶으면 Number()로 형변환해서 쓰기
				}
				<a
					id={t.id.toString()}
					href={'/read/' + t.id}
					onClick={(e) => {
						e.preventDefault();
						// event.targer : 이벤트를 유발시킨 태그 (a 태그)
						// 문자열이었던 id 를 숫자로 형변환
						if (e.target instanceof Element) onChangeMode(Number(e.target.id));
					}}>
					{t.title}
				</a>
			</li>,
		);
	}

	return (
		<nav>
			<ol>{lis}</ol>
		</nav>
	);
};

export default Nav;
