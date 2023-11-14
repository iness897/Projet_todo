// const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     status: { type: String, required: true },
//     user: [
//         {
//             type: mongoose.Types.ObjectId,
//             ref: "User",
//         },
// ],
// })


// module.exports = mongoose.model('TaskModel', taskSchema);


const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    UserSchema: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
],
})


module.exports = mongoose.model('Task', taskSchema);
