import styles from "./Header.module.css"

export default function Header() {
    return <>
        <div className={styles.box}>
            <h1><a href="#x" className={`${styles.nat}`}>토익 영단어(고급)</a></h1>
            <div className={styles.menu}>
                <a href="#x" className={`${styles.btn}`}>단어 추가</a>
                <a href="#x" className={`${styles.btn}`}>Day 추가</a>
            </div>
        </div>
    </>
}