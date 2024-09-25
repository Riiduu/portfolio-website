const Project = (props: any) => {
    const handleNav = () => {
        // checks if a full link has been provided. If not then adds the https:// to the beginning of the string
        if (props.project_link.includes("https://")) {
            window.open(props.project_link, "_blank");
        } else {
            window.open('https://' + props.project_link, "_blank");
        }

    }

    return(
        <a target="_blank" style={{ width: '320px', height: '240px' }} onClick={handleNav} className="hover:cursor-pointer py-5 px-10 flex flex-col justify-center items-center decoration-0 rounded-lg hover:shadow-2xl transition-all duration-300 bg-[#393E46] bg-opacity-50">
            <div className="flex flex-col justify-center items-center gap-2">
                <img className="" src={props.project_img}
                     alt=""/>
                <h3 className="font-medium text-xl">{props.project_name}</h3>
                <h4 className="rounded-xl px-2  font-medium" style={{background: props.background}}>{props.project_tag}</h4>
            </div>
        </a>
    )
}

export default Project;