import './Modal.css';

const Modal = (props) => {
    if (props.ModalOpen) {
        return(
            <div className='overlay'>
                <div className='modal'>
                    <div className='modal-introduction'>
                        <p>モーダル</p>
                    </div>
                    <button
                        className='modal-close-btn'
                        onClick={() => props.setModalOpen(false)}>
                        とじる
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Modal;

// import Modal from './Modal';
{/* <Modal ModalOpen={ModalOpen} setModalOpen={setModalOpen} /> */}
// onClick={() => {setModalOpen(true)}}