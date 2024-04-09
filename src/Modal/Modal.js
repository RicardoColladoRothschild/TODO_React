import React from 'react'
import ReactDom  from 'react-dom';


function Modal({children}){

    return ReactDom.createPortal(
        <div className="">
            {children}
        </div>,

            document.getElementById('modal')
    );
}

export { Modal };
