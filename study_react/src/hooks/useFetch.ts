import { useEffect, useState } from 'react';

// url 을 받아 fetch, 정보를 리턴해주는 커스텀 훅
// 서버에서 데이터를 받을 때 fetch 문을 사용하지 않고
// url 주소만 전달하면 데이터를 리턴
export default function useFetch(url: string) {
	// 데이터를 저장할 빈 데이터 생성
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setData(data);
			});
	}, [url]);

	// 최종 반환은 json 이 아닌 객체 형식
	return data;
}
