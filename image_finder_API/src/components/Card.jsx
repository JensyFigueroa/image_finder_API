import React from 'react';
import { Fragment } from 'react';
import Paginacion from './Paginacion';

const Card = (props) => {

        /* console.log(props.imagenes) */
        
    return ( 
        <Fragment>
            <div className="row justify-content-center ">
                {props.imagenes.length === 0 ? null : 
                (props.imagenes.map(imag => (
                    <div className='card' key={imag.id}>
                        <img src={imag.previewURL} className='card-img-top' width="160" height="160"alt={imag.tags}/>
                        <div className='card-body'>
                            
                            <p className='card-text'>{imag.likes} Me gusta</p>
                            <p className='card-text'>{imag.views} Vistas</p>
                            <a href={imag.largeImageURL} className='btn btn-primary' target='_blank'>Ver imagen</a>
                        </div>
                    </div> 
                    )))
                } 
            </div>
            {props.imagenes.length > 0 ?(<Paginacion  
                 btnAnterior =  {props.btnAnterior}
                 btnSiguiente = {props.btnSiguiente}
            />):(null)}
        </Fragment>
     );
}
 
export default Card;
<Fragment>
    <div className='container'>
        <h3>Desde Card - imagenes</h3>
    </div>
</Fragment>