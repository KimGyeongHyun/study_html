import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// 부트스트랩 모달창
function Example() {
	// 모달창 토글 state
	const [show, setShow] = useState(false);
	const modalToggle = () => setShow(!show);

	return (
		<>
			{/* 모달 버튼 */}
			<Button variant='primary' onClick={modalToggle}>
				Bootstrap Modal
			</Button>

			{/* 모달 창 */}
			<Modal show={show} onHide={modalToggle}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={modalToggle}>
						Close
					</Button>
					<Button variant='primary' onClick={modalToggle}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Example;
