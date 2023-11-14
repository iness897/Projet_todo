const {Router} = require("express")
const { getAllTask, getOneTask,createTask, updateTask, removeTask } = require("../controllers/TaskController")
const { signup, signin } = require("../controllers/UserController")


const router = Router()



router.post('/signup', signup);
router.post('/signin', signin);


router.get('/todo',  getAllTask)
router.get('todo/:id', getOneTask)
router.post('/todo', createTask)
router.put('/todo/:id', updateTask)
router.delete('/todo/:id', removeTask)

module.exports = router;



