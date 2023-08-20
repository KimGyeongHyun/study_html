import { useState } from 'react';
import styles from './MyModal.module.css';
import { GrClose } from 'react-icons/gr';
import MyBootstramModal from './MyBootstrapModal';

interface ModalProps {
	onChangeMode: () => void;
}

// 커스텀 모달창
function ModalWindow(props: ModalProps) {
	return (
		<div className={styles.modalWindow}>
			<div className={styles.innerBox}>
				<GrClose
					className={styles.iDeco}
					size={25}
					onClick={() => {
						props.onChangeMode();
					}}></GrClose>
				<h2 className={styles.h2Deco}>Modal</h2>
				<p className={styles.pDeco}>hello</p>
			</div>
		</div>
	);
}

// 페이지
function MyModal() {
	// 커스텀 모달창을 state 로 결정
	const [modal, setModal] = useState(false);
	let modal_comp = modal ? (
		<ModalWindow
			onChangeMode={() => {
				setModal(!modal);
			}}
		/>
	) : null;

	return (
		<>
			{/* 커스텀 모달창 */}
			<button
				onClick={() => {
					setModal(!modal);
				}}
				style={{ margin: '20px', padding: '10px' }}>
				Custom Modal
			</button>
			{modal_comp}

			{/* 커스텀 부트스트랩 모달창 */}
			<MyBootstramModal />
		</>
	);
}

export default MyModal;
