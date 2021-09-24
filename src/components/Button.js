import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({icon, color, classN, click}) => {
    return (
        <button className={classN}>
            <FontAwesomeIcon icon={icon} style={{color: color}} size="3x" onClick={click} />
        </button>
    )
}

export default Button
