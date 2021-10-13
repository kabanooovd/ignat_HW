import React from "react";

export const UniqueButton = React.memo(({
    uniqueOnClick,
    disabled,
    buttonTitle,
} : {
    uniqueOnClick: () => void
    disabled: boolean
    buttonTitle: string
}) => {

    const buttonStyle = {
        width: '140px',
        height: '35px',
        borderRadius: '4px',
        border: '1px solid blue',
        backgroundColor: 'blue',
        color: 'snow',
        fontSize: '18px',
        fontFamily: "'Lekton', sans-serif"
    }

    return <button style={buttonStyle} onClick={uniqueOnClick} disabled={disabled}>
        {buttonTitle}
    </button>
})





