import {collection, query, getDocs} from "firebase/firestore";
import {useState, useEffect} from "react";
import db from '../../firebase.ts';

import Project from './Project.tsx'

const RecentWorksComponent = () => {
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
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

    return (
        <div
            className="max-w-screen-xl h-full flex flex-col justify-center md:justify-between mx-auto py-72 text-white">

            <div
                className="mt-[-100px] flex flex-col justify-center text-center md:text-left mx-4 md:mx-4 lg:mx-8 xl:mx-0">
                <h1 className="text-6xl font-medium">My Recent <span className="text-[var(--color-3)]">Works</span></h1>

                {/* Projects gallery */}
                <div className="flex flex-row flex-wrap gap-10 mt-10 justify-center md:justify-start lg:justify-start">
                    {
                        projects.map((doc, index) => (
                            <Project
                                key={index}
                                background="yellow"
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