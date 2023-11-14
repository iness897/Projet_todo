import React, {useEffect, useState} from 'react'
import ListTodo from './ListTodo';
import ListTodoProgress from './ListTodoProgress';
import { getAllTask, createTask, updateTask, removeTask } from '../../utils/Handle';
import { Button} from 'reactstrap';
import background from './image/background.jpg'
import ListTodoClosed from './ListTodoClosed';
import { toast } from 'react-hot-toast';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap";
import Header from './Header';

// on instancie nos plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)




const CreateTodo = () => {

    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [completedItems, setCompletedItems] = useState([]);
    const [closedItems, setClosedItems] = useState([]);
    const [toDoId, setToDoId] = useState("");
    const [update, setUpdate] = useState(false);


    const displayItems = (items) => {
      setTasks(items.filter(item=> item.status === 'toDo'));
      setCompletedItems(items.filter(item=> item.status === 'completed'));
      setClosedItems(items.filter(item=> item.status === 'closed'));
    } 

    const handleGetAllTasks = async() => {
      const items = await getAllTask();
      displayItems(items);
    }

    const handleCreateTask = async () => {
      await createTask(name, description);
      //tell front to be refreshed
      await handleGetAllTasks();
      //return empty fields
      setName('');
      setDescription('');
      return toast.success("Task created !")
    }


    const updateForm = (_id, name, description) =>{
      setUpdate(true)
      setName(name)
      setDescription(description)
      setToDoId(_id)
    }
    
    const handleUpdateTask = async () => {
      await updateTask(toDoId, name, description, 'toDo');
      await handleGetAllTasks();
      //return empty fields
      setName('');
      setDescription('');
      setUpdate(false);
      return toast.success("Modified task!")
    }

    const handleRemove = async(id) => {
      await removeTask(id)
      await handleGetAllTasks();
      return toast.success("Deleted task!")
    }

    useEffect(()=> {
      handleGetAllTasks();
      slideInTop(".container_create")
      slideInLeft(".container_task")
      // onLoad()
    }, []);

     useEffect(()=> {
      //responsible of displaying after refresh
      setTasks(tasks);
      setCompletedItems(completedItems);
      setClosedItems(closedItems)
    }, [tasks, completedItems, closedItems]);




    const addToProgress = async({_id, name, description}) => {
      await updateTask(_id, name, description,'completed')
      await handleGetAllTasks();
      return toast.success("Task in progress ...")
    }

    const addToClosed = async({_id, name, description}) =>{
      await updateTask(_id, name, description,'closed')
      await handleGetAllTasks();
      return toast.success("Task closed ...")
    }


    const handleToast = (e) =>{
      if(name.length < 1){
        return toast.error("A ToDoList must have more than 3 characters please !")
      }
    }

    // Animation GreenSock

    const slideInTop = (elem, delay, duration) => {
      gsap.fromTo(
        elem,
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          delay: delay || 0.4,
          duration: duration || 0.6,
          scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: "bottom center"
          }
        }
      )
    }

    const slideInLeft = (elem, delay, duration) => {
      gsap.fromTo(
        elem,
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          delay: delay || 0.4,
          duration: duration || 0.6,
          scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: "bottom center"
          }
        }
      )
    }


  return (
    <>
    <div className='container_create text-center' style={{backgroundImage: `url(${background})`}} >

        <Header />

        <div className="form">
            <input type='text' placeholder='Add a task' value={name}
             onChange = {(e) => setName(e.target.value)}
             onInput={() =>handleToast()}
             />

            <textarea className="form-control" placeholder='Add a description' id="exampleFormControlTextarea1" rows="3" value={description} onChange = {(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className='container_button'>
          <Button
            onClick={ update ?  ()=> handleUpdateTask()
              : () => handleCreateTask(name, description)}>

              {update ? "Modify" : "Create"}
          </Button>
        </div>
    </div>

    <div className='container_task'>
        <div className="btn-area">
            <button className='secondaryBtn'>
                ToDo List 
                <div className='count'>
                  <span>{tasks.length}</span>
                </div>
            </button>
            <button className='secondaryBtn'>
                In progress List
                <div className='count'>
                  <span>{completedItems.length}</span>
                </div>
            </button>
            <button className='secondaryBtn'>
                 Completed List
                <div className='count'>
                  <span>{closedItems.length}</span>
                </div>

            </button>            
        </div>

        <div className='container_list'>
            <div className="list">

                { tasks && tasks.map((item, index) =>
                      <ListTodo
                        key={item._id} 
                        name={item.name}
                        description={item.description}
                        updateForm={() => updateForm(item._id, item.name, item.description)}
                        addToProgress={() =>addToProgress(item)}
                      />
                )}
            </div>

            <div className="list">
                {completedItems && completedItems.map((item, index) =>
                
                      <ListTodoProgress
                        key={item._id} 
                        name={item.name}
                        description={item.description}
                        addToClosed={() =>addToClosed(item)}
                      />

                  )}
            </div>
          

            <div className="list">
                {closedItems && closedItems.map((item, index) =>
                
                      <ListTodoClosed
                        key={item._id} 
                        name={item.name}
                        description={item.description}
                        removeTask={() => handleRemove(item._id)}
                      />

                  )}
            </div>

        </div>
          

    </div>


    </>

  )
}



export default CreateTodo; 


