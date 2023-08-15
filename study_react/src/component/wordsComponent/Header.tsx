import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header() {

    return <>
        <div className={styles.box}>
            <h1><Link to="/" className={styles.nat}>토익 영단어(고급)</Link></h1>
            <div className={styles.menu}>
                <Link to="/create_word" className={styles.btn}>단어 추가</Link>
                <Link to="/create_day" className={styles.btn}>Day 추가</Link>
            </div>
        </div>
    </>
}
