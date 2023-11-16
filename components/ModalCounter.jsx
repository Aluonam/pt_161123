import React, { useState } from 'react';
import { Button, Modal } from 'antd';


const ModalCounter = ({numberCounter}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Mira el contador
      </Button>
      <Modal title="Contador" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {numberCounter}
      </Modal>
    </>
  );
};
export default ModalCounter;