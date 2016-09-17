/**
 * Created by hard on 16-9-17.
 */

import React from 'react';
import '../styles/Modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick() {
        this.setState({visibility: 'visible'});
        let { onClick } = this.props;
        onClick = onClick || function () {};
        onClick();
    }

    handleCancel(){
        let { onCancel } = this.props;
        onCancel = onCancel || function () {};
        onCancel();
    }


    render() {
        let { open } = this.props;
        return (
            <div className="modal-overlay" style={{visibility: open?'visible':'hidden'}}>
                <div className="modal-data">
                    {this.props.children}
                    <button className="modal-button modal-cancel" onClick={this.handleCancel.bind(this)}>取消</button>
                    <button className="modal-button modal-confirm">确认</button>
                </div>
            </div>
        );
    }
}

export default Modal;