// Popup.js
import React, {useEffect} from 'react';

const Popup = ({ isOpen, onClose, websiteUrl }) => {

    useEffect(() => {
        // Reload the iframe content when the popup is opened
        if (isOpen) {
            const iframe = document.getElementById('popupIframe');
            if (iframe) {
                iframe.contentWindow.location.reload(true);
            }
        }
    }, [isOpen]);

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' , backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Chat with me</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <iframe src={websiteUrl} title="Chat with me" width="100%" height="550px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
