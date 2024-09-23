import './Project.css';

const Project = (props: any) => {
    return (
        <a href="#" className="Project__container">
            <div className="Project__project_details">
                <img src={props.project_img}
                     alt=""/>
                <h3>{props.project_name}</h3>
                <h4 style={{background: props.background}}>Games</h4>
            </div>
        </a>
    )
}

export default Project;