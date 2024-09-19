import './Project.css';

const Project = (props: any) => {
    return (
        <a href="#" className="Project__container">
            <div className="Project__project_details">
                <img src={props.project_img}
                     alt=""/>
                <h3>{props.project_name}</h3>
            </div>
        </a>
    )
}

export default Project;