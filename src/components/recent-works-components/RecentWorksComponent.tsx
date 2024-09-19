import './RecentWorksComponent.css'

import Project from './Project'

const RecentWorksComponent = () => {
    return (
        <div className="RecentWorks__container">
            <h1>My Recent <span className="RecentWorks__span_works">Works</span></h1>
            {/* Selection buttons */}
            <div className="RecentWorks__buttons">
                <button className="RecentWorks__option_button">Websites</button>
                <button className="RecentWorks__option_button">Games</button>
                <button className="RecentWorks__option_button">Apps</button>
            </div>

            {/* Projects gallery */}
            <div className="RecentWorks__projects_gallery">
                <Project project_img="https://logos-world.net/wp-content/uploads/2023/01/Unity-Symbol.png" project_name="Unity Games"/>
                <Project project_img="https://logos-world.net/wp-content/uploads/2023/01/Unity-Symbol.png" project_name="Unity Games"/>
                <Project project_img="https://logos-world.net/wp-content/uploads/2023/01/Unity-Symbol.png" project_name="Unity Games"/>
            </div>

        </div>
    )
}

export default RecentWorksComponent