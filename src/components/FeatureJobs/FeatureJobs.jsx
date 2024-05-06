import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {

    const [jobs,setJobs]=useState([])

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">Featured Jobs</h2>
                <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5">
                {
                    jobs.map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;