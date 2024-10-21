import ProjectCard from "@/components/ProjectCard"
import NoProjects from "@/components/projects/NoProjects";

const CompletedProjects = () => {
    const completedData = [];
    // const completedData = [
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    //     {
    //         projectName: "Mobile App Design",
    //         client: "Monaco FC",
    //         rating: 4.5,
    //         projectStart: "May, 3 2024",
    //         projectEnd: "June, 3 2024",
    //     },
    // ]
  return (
    <div >
        {
            completedData.length != 0 ? 
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 w-full justify-between'>
              {  completedData.map(({projectName, client, rating, projectStart, projectEnd}, id) => (
                        <ProjectCard key={id} projectName={projectName} client={client} rating={rating} projectStart={projectStart} projectEnd={projectEnd} />
                    ))}
            </div>
            : 
           <NoProjects />
        }
    </div>
  )
}

export default CompletedProjects
