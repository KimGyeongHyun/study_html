import { useEffect, useState } from "react";

// url 을 받아 fetch, 정보를 리턴해주는 커스텀 훅
export default function useFetch(url) {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>{return res.json();})
        .then(data=>{setData(data);});
    }, [data]);

    return data;
}