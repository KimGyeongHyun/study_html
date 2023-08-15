import { Link } from "react-router-dom"
import style from "./Header.module.css"

export default function Header() {
    return <>
        <div className={style.box}>
            <h1><Link to="/" className={`${style.nat}`}>토익 영단어(고급)</Link></h1>
            <div className={style.menu}>
                <Link to="/create_word" className={`${style.btn}`}>단어 추가</Link>
                <Link to="/create_day" className={`${style.btn}`}>Day 추가</Link>
            </div>
        </div>
    </>
}