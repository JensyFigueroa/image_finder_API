import React, { Fragment } from 'react'

const Paginacion = (props) => {
    return ( 
        <Fragment>
            <div className='row justify-content-center py-3'>
                <button type='button' className='btn btn-info mr-3' onClick={props.btnAnterior}>Anterior &larr;</button>
                <button type='button' className='btn btn-info mr-3' onClick={props.btnSiguiente}>Siguiente &rarr;</button>
            </div>
        </Fragment>
     );
}
 
export default Paginacion;