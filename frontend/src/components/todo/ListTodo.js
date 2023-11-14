import './listTodo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faSpinner } from '@fortawesome/free-solid-svg-icons'

const ListTodo = ({name,description, updateForm, addToProgress}) => {


    return (
        <div className="card-container">
            <div className = "card-line"></div>
            <div className = "task_bloc">
                <div className = "task_name">{name}</div>
                <div className = "task_description">{description}</div>

                <div className="container-icon">
                    <FontAwesomeIcon icon={faSpinner} className='icon-progress' onClick={addToProgress}/>
                    <FontAwesomeIcon icon={faPenToSquare} className='icon-edit' onClick={updateForm}/>

                </div>
            </div>
        </div>
    );
};

export default ListTodo; 
