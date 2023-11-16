import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const ModalPassword = ({inputPassword}) => {

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
         visualiza la contraseña 
      </Button>
      <Modal title="La contraseña es:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {inputPassword}
      </Modal>
    </>
  );
};
export default ModalPassword;