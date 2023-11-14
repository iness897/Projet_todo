// const mongoose = require('mongoose'); 

// const uniqueValidator = require('mongoose-unique-validator'); 

// const userSchema = mongoose.Schema({
//     email: { type: String, require: true, unique: true}, 
//     username: {type: String, require: true, unique: true},
//     password: { type: String, required: true }, 
//     task: [
//         {
//             type: mongoose.Types.ObjectId,
//             ref: "TaskModel",
//         },
// ],
// }); 

// userSchema.plugin(uniqueValidator);


// module.exports = mongoose.model('User', userSchema);




const mongoose = require('mongoose'); 

const uniqueValidator = require('mongoose-unique-validator'); 

const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true}, 
    username: {type: String, require: true, unique: true},
    password: { type: String, required: true }, 
    TaskSchema: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Task",
        },
],
}); 

userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', userSchema);