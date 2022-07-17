import Modal from "react-modal";

interface CustomModalProps {
  modalIsOpen: boolean;
  imageUrl: string;
  author: string;
  dateTaken: string;
  onClick: () => void;
}

export const CustomModal = ({
  modalIsOpen,
  imageUrl,
  author,
  dateTaken,
  onClick,
}: CustomModalProps) => {
  return (
    <Modal isOpen={modalIsOpen} className="Modal" overlayClassName="Overlay">
      <div
        className="h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute bottom-0 inset-x-0 bg-white/75 px-4 py-4 flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold text-pink-800">{author}</div>
            <div className="text-lg text-gray-500">{dateTaken}</div>
          </div>
          <button
            className="text-lg font-bold border rounded-full px-4 border-pink-800 text-pink-800 hover:bg-pink-800 hover:text-white"
            onClick={onClick}
          >
            close
          </button>
        </div>
      </div>
    </Modal>
  );
};
