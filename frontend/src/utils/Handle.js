import axios from 'axios'

// `url` correspond à l’URL à utiliser pour faire la requête au serveur.
const url = "http://localhost:3005/todo"



const getAllTask = () =>{
   return  axios
    .get(url)
    
      // `data` est le contenu de la réponse renvoyée par le serveur.

    .then(({data}) =>{
       return data
    })
}

const createTask = (name, description, id) =>{
    return axios
    .post(`${url}/`, {name, description})
    .catch((err) => console.log(err))
}

const updateTask = (toDoId, name, description, status, progress) =>{
    return axios
    .put(`${url}/${toDoId}`, {_id : toDoId, name, description, status, progress})
    .catch((err) => console.log(err))
}

const removeTask = (toDoId) =>{
    axios
    .delete(`${url}/${toDoId}`, {_id : toDoId})
    .catch((err) => console.log(err))
}

export { getAllTask, createTask, updateTask, removeTask } 

