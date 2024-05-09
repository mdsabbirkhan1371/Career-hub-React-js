import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilities/localstroage";
import SingleAppliedJobs from "../SingleAppliedJobs/SingleAppliedJobs";

const ApplyiedJobs = () => {

    const [appliedJobs,setAppliedJobs]=useState([])
    const [displayJobs,setDisplayJobs]=useState([])

    const jobs = useLoaderData()

    const handleJobFilter=(filter) =>{
       
        if(filter==='all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter==='remote'){
            const remoteJobs = appliedJobs.filter(job=>job.remote_or_onsite ==='Remote');
            setDisplayJobs(remoteJobs)
        }
        else if(filter==='onsite'){
            const onsiteJobs= appliedJobs.filter(job=>job.remote_or_onsite==='Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }
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
            setDisplayJobs(jobsApplied)

        }
    },[jobs])
    return (
        <div>
            <h4>Applied Jobs : {appliedJobs.length}</h4>
            <div className="text-center mb-5">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleJobFilter('all')}><a>All</a></li>
                        <li onClick={()=>handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=>handleJobFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="border">
                {
                    displayJobs.map(appliedJob=><SingleAppliedJobs appliedJob={appliedJob} key={appliedJob.id}></SingleAppliedJobs>)
                }
            </div>

            
        </div>

    );
};

export default ApplyiedJobs;