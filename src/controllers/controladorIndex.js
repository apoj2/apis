//receta para consumir

//1. pa ONDE VAS OME
//uri del api

const URI='https://api.spotify.com/v1/artists/2kCcBybjl3SAtIcwdWpUe3/top-tracks?market=US'

//2.HACER QUE OME
//metodo

const PETICION={
    method:'GET',
    headers:{
        Authorization:' Bearer BQC2xNMvHQBf0MaZhf-ejAvmlUgNuu6o0l_akVAVE10fxdbQnOjXp9t_TxtgPibEgbG21veEr1wlxuzKJyrW_ZsHNqBP0T17zhuxF2N_FXiB9Uedyuogx31X1XQp9Lt0Y8omP5hMQilYkEAvyUh7wNhvYYRVnUqbBzifpf7ZimlZahtgsDGQosivWN-KAtR5DvA'
    }     
}

//andate pues omee
//consuma el api (utilizando promesas)

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() 
})
.then(function(respuesta){
    console.log(respuesta)    
})
.catch(function(respuestaError){
    console.log(respuestaError)
})