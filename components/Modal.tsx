import { XIcon } from '@heroicons/react/solid';
import MuiModal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtoms';

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>
      </>
      {/* 이 빈 괄호는 mui의 modal 사용법에서 한번 감싸주어야 되는 실행법이 있어서 형식적으로 만든거임 */}
    </MuiModal>
  );
}

export default Modal;
