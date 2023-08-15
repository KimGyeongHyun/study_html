import { useEffect, useState } from 'react';

// url 을 받아 fetch, 정보를 리턴해주는 커스텀 훅
// 서버에서 데이터를 받을 때 fetch 문을 사용하지 않고
// url 주소만 전달하면 데이터를 리턴
export default function useFetch(url: string) {
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

	return data;
}
