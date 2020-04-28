import React from 'react'

export default () => {

    function volver(){
        window.history.back()
    }

    return (
        <button className="button is-primary" onClick={volver}>Go Back</button>
    )
}
