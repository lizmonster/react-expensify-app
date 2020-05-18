import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.removingExpense}
        ariaHideApp={false}
        contentLabel="Remove Expense"
        closeTimeoutMS={
            200
        }
        className="modal"
    >
        <h3 className="modal__title">Remove Expense</h3>
        <h3 className="modal__name">"{props.expenseName}" ?</h3>
        <button className="button modal__button" onClick={props.handleRemove}>Yes</button>
        <button className="button modal__button" onClick={props.onDismiss}>No</button>
    </Modal>
);

export default OptionModal;