import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// 상단의 제목과 단어, day 추가 버튼
// 각 컴포넌트는 링크가 있음
export default function Header() {
	// body 구성
	// title 을 누를 경우 날짜 버튼이 있는 DayList.tsx 로 설정
	// 단어 추가 버튼을 누를 경우 단어를 생성하는 fomr 태그로 설정 (CreateWord.tsx)
	// Day 추가 버튼을 누를 경우 날짜를 생성하는 CreateDay.tsx 로 설정

	// Link 는 a tag 를 생성하며 heft 를 to 속성으로 설정한다
	// 만약 다른 컴포넌트에서 링크를 걸고 싶으면
	// useNavigate 를 사용하면 된다 (DayList.tsx)
	return (
		<>
			<div className={styles.box}>
				<h1>
					<Link to='/' className={styles.nat}>
						토익 영단어(고급)
					</Link>
				</h1>
				<div className={styles.menu}>
					<Link to='/create_word' className={styles.btn}>
						단어 추가
					</Link>
					<Link to='/create_day' className={styles.btn}>
						Day 추가
					</Link>
				</div>
			</div>
		</>
	);
}
