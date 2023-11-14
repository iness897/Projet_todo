const Task = require('../models/TaskSchema')
const User = require('../models/UserSchema')




module.exports.getAllTask = async(req, res, next) =>{
  Task.find()
    .then(toDoModels => res.status(200).json(toDoModels))
    .catch(error => res.status(400).json({ error }));
}


 module.exports.getOneTask = async(req, res, next) =>{
  const task = await Task.find({user: req.params.id})
     res.status(200).json({ task })
}


module.exports.createTask = async(req, res, next) =>{
  const task = new Task({
    status: 'toDo',
   ...req.body      
  });

  task.save()
    .then(() => res.status(201).json({ message: 'toDo enregistré !'}))
    .catch(error => res.status(400).json({ error }))
}


module.exports.updateTask = async(req, res, next) =>{
  Task.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'TaDo modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

module.exports.removeTask = async(req, res, next) =>{
  Task.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'ToDo supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}








