import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilities/localstroage";
import SingleAppliedJobs from "../SingleAppliedJobs/SingleAppliedJobs";

const ApplyiedJobs = () => {

    const [appliedJobs,setAppliedJobs]=useState([])

    const jobs = useLoaderData()
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication()
        if(jobs.length>0){
            // const jobsApplied =jobs.filter(job=>storedJobId.includes(job.id))
            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job=>job.id===id)
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)

        }
    },[])
    return (
        <div>
            <h4>Applied Jobs : {appliedJobs.length}</h4>
            <div className="text-center mb-5">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="border">
                {
                    appliedJobs.map(appliedJob=><SingleAppliedJobs appliedJob={appliedJob} key={appliedJob.id}></SingleAppliedJobs>)
                }
            </div>

            
        </div>

    );
};

export default ApplyiedJobs;