import React, { useEffect, useState } from "react";
import Buscador from "./components/Buscador";
import Card from "./components/Card";


function App() {

  //Creamos un UseState
   const [findWord, setFindWord] = useState({
    word:'',
    page:'',
   })

   const [imagenes, setImagenes] = useState({imagenes:[]})

   const consultarApi = async ()=>{
    
      const url = await fetch (`https://pixabay.com/api/?key=26197220-bc8f761483be838e6f6e00af5&q=${findWord.word}&per_page=30&page=${findWord.page}`);//&per_page=30  
      const photo = await url.json()
      /* console.log(photo.hits) */
      setImagenes({imagenes:photo.hits})
      /* console.log({imagenes:photo.hits}) */
   }

   useEffect(() => {
    if (findWord.word !== '') {
      //console.log('Dentro de useEffect '+findWord.word)
      consultarApi();
    }
   },[findWord.word]);
   
//Obtenemos la data del INPUT que viene del Buscador.jsx
  const searchData = (data) =>{
    /* console.log(data) */
      setFindWord({
        word:data,
        page: 1
      })
  }

  const btnAnterior = () => {
    /* console.log('Anterior...') */

    // Leer del state findWord la propidad page
    let page = findWord.page;
    //console.log(page);

    //Frenarlo en la page 1
    if (page === 1) return null;

    //Decrementar la pagina actual
    page -= 1;
    //console.log(page);

      //Agregar el cambio de la propiedad page al state findWord
      setFindWord({page})
}

  const btnSiguiente = () =>{
    //console.log('Siguiente...')

    // Leer del state findWord la propidad page
    let page = findWord.page;
    //console.log(page);

    //Incrementar la pagina actual
    page += 1;
    //console.log(page);

    //Agregar el cambio de la propiedad page al state findWord
    setFindWord({page})
}

  return (
    <div className="app">
      
      <Buscador searchData={searchData} />
      {/* {findWord.word} */}

      <Card imagenes={imagenes.imagenes} 
        btnAnterior =  {btnAnterior}
        btnSiguiente = {btnSiguiente}
      />
      
    </div>
    
  );
}

export default App;
