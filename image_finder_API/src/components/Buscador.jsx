import React, {Component, Fragment} from 'react';

const Buscador = (props) => {

    const busquedaRef = React.createRef();

    const onSubmit = (e) =>{
        e.preventDefault(); 

        //Tomamos la entrada del INPUT 
        /* console.log(busquedaRef.current.value) */

        //Se envia al componente principal App.js
        if (busquedaRef.current.value != '') {
            props.searchData(busquedaRef.current.value);
        }        
    } 

    const btnAnterior = () => {
        console.log('Anterior...')
    }

    const btnSiguiente = () =>{
        console.log('Siguiente...')
    }

    return ( 
        <Fragment>
            <div className="container">
                <div className="jumbotron">
                    <h2 className="text-center"> Buscardor de Imagenes</h2>
                    <br />
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="form-group col-md-8">
                                <input type="text" ref={busquedaRef} className='form-control form-control-lg' placeholder='Buscar imagen. Ej: Futbol' />
                            </div>
                            <div className="form-group col-md-4">
                                <input type="submit" className='btn btn-lg btn-danger btn-block' value='Buscar...' />
                            </div>
                        </div>        
                    </form>  
                </div>
            </div>
        </Fragment>
     );
}
 
export default Buscador;