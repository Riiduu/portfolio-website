import {collection, query, getDocs} from "firebase/firestore";
import {useState, useEffect} from "react";
import db from '../../firebase.ts';

import Project from './Project.tsx'

const RecentWorksComponent = () => {
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        // Fetches the projects from the firebase firestore database and saves the in the state
        const fetchProjects = async () => {
            const q = query(collection(db, "projects"));
            const querySnapshot = await getDocs(q);
            const projectArray: any[] = [];
            querySnapshot.forEach((doc) => {
                projectArray.push(doc.data());
            });
            setProjects(projectArray);
        };

        fetchProjects();
    }, []);

    function checkColor(doc: string) {
        switch (doc) {
            case "Game":
                return "red";
            case "Website":
                return "green";
            case "App":
                return "lightblue"
            default:
                return "pink" // I don't know why pink. Please don't ask me
        }
    }

    return (
        <div
            className="max-w-screen-xl min-h-screen flex flex-col justify-center md:justify-between mx-auto text-white">

            <div
                className="flex flex-col justify-center md:items-start my-auto text-center md:text-left mx-4 md:mx-4 lg:mx-8 xl:mx-0">
                <h1 className="text-6xl font-medium">My Recent <span className="text-[var(--color-3)]">Works</span></h1>

                {/* Projects gallery */}
                <div className="flex flex-row flex-wrap gap-10 mt-10 justify-center md:justify-start lg:justify-start">
                    {
                        projects.map((doc, index) => (

                            <Project
                                key={index}
                                background={checkColor(doc.tag)}
                                project_img={doc.image_link}
                                project_name={doc.title}
                                project_link={doc.github_link}
                                project_tag={doc.tag}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default RecentWorksComponent