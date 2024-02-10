import * as React from 'react';
import Modal from '@mui/material/Modal';


export default function index({openModal,totalCost, handleClose}) {

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-6 items-center w-[450px] bg-white rounded-lg p-8 outline-none'>
        <h2 className='text-2xl text-green-600 font-semibold'>
            Purchase was successful 
          </h2>
          <span className='text-base text-[#4b4b4b]'>
            Your orders will be delivered soon
          </span>
          <p className='flex gap-2 text-lg font-semibold'>
          <span>
            Total cost: 
          </span>
            {totalCost} ₽
          </p>
        </div>
      </Modal>
    </div>
  );
}