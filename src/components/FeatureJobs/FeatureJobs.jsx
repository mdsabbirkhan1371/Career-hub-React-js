import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {

    const [jobs,setJobs]=useState([])

    const [dataLength,setDataLength]=useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center my-5">
                <h2 className="text-2xl font-bold">Featured Jobs</h2>
                <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                {
                    jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center">
            <div className={dataLength===jobs.length&&'hidden'}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn btn-outline btn-success my-5">See All Jobs</button>
            </div>
            </div>

        </div>
    );
};

export default FeatureJobs;