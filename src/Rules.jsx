import { createPortal } from "react-dom";
import { useState } from "react";

import guinea from './assets/guineafixed.png'

function Rules() {
    const [isVisible, setIsVisible] = useState(true);

    const closePortal = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return createPortal(
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button onClick={closePortal} style={styles.close}>X</button>
                <h2>Game Rules</h2>
                <ul>
                    <li>Only adjacent tiles can be swapped.</li>
                    <li>You can shuffle the puzzle.</li>
                    <li>Try to arrange the tiles in the correct order!</li>
                    <li> <img id="preview" src={guinea}/></li>
                    <li>Image preview</li>
                </ul>
            </div>
        </div>,
        document.querySelector('#rules')
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '90%',
        textAlign: 'center',
    },
    close: {
        backgroundColor:'black',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
    },
};

export default Rules;
