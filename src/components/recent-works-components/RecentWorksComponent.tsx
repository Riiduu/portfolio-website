import './RecentWorksComponent.css'

import Project from './Project'

const RecentWorksComponent = () => {
    return (
        <div className="RecentWorks__container">
            <h1>My Recent <span className="RecentWorks__span_works">Works</span></h1>

            {/* Projects gallery */}
            <div className="RecentWorks__projects_gallery">
                <Project background="green" project_img="https://logos-world.net/wp-content/uploads/2023/01/Unity-Symbol.png" project_name="Unity Games"/>
                <Project background="yellow" project_img="https://logos-world.net/wp-content/uploads/2023/01/Unity-Symbol.png" project_name="Unity Games"/>
                <Project background="lightblue" project_img="https://logos-world.net/wp-content/uploads/2023/01/Unity-Symbol.png" project_name="Unity Games"/>
            </div>

        </div>
    )
}

export default RecentWorksComponent