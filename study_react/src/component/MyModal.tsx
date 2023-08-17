import { useState } from 'react';
import styles from './MyModal.module.css';
import { GrClose } from 'react-icons/gr';
import MyBootstramModal from './MyBootstrapModal';

interface ModalProps {
	onChangeMode: () => void;
}
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

function MyModal() {
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
			<button
				onClick={() => {
					setModal(!modal);
				}}
				style={{ margin: '20px', padding: '10px' }}>
				Custom Modal
			</button>
			{modal_comp}
			<MyBootstramModal />
		</>
	);
}

export default MyModal;
