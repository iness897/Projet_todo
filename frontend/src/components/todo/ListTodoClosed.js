import './listTodo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ListTodoClosed = ({name, description, removeTask}) => {



    return (
        <div className="card-container" style={{opacity: "0.5"}}>
            <div className = "card-line"></div>
            <div className = "task_bloc" style={{gap: "20px"}}>
                <div className = "task_name">{name}</div>
                <div className = "task_description" style={{maxHeight: "140px", marginBottom: "23px"}}>{description}</div>

                <div className="container-icon">
                    <FontAwesomeIcon icon={faTrash} className='icon-delete' onClick={removeTask} />
                </div>
            </div>
        </div>
    );
};

export default ListTodoClosed; 
