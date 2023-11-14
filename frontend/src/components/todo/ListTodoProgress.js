import './listTodo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ListTodoProgress = ({name, description, addToClosed}) => {



    return (
        <div className="card-container">
            <div className = "card-line"></div>
            <div className = "task_bloc" style={{gap: "20px"}}>
                <div className = "task_name">{name}</div>
                <div className = "task_description" style={{maxHeight: "140px", marginBottom: "23px"}}>{description}</div>

                <div className="container-icon">
                    <FontAwesomeIcon icon={faCheck} className='icon-check' onClick={addToClosed} />
                </div>
            </div>
        </div>
    );
};

export default ListTodoProgress; 
