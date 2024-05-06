import { FaLocationDot } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";


const Job = ({job}) => {
    console.log(job)
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job;

    return (
        <div className="border-solid border-2 border-sky-900 p-4 rounded-lg space-y-1">
            <img className="w-24 mx-auto" src={logo} alt="" />
            <h3 className="font-semibold">{job_title}</h3>
            <h5>{company_name}</h5>
            <div>
                <button className="btn btn-xs	 btn-outline btn-primary mr-2">{remote_or_onsite}</button>
                <button className="btn btn-xs	 btn-outline btn-primary">{job_type}</button>
                
            </div>
            <div className="flex items-center text-sm">
                <FaLocationDot/>
                <p className="m-1"><small>{location}</small></p>
                <IoLogoUsd />
                <span><small>{salary}</small></span>
                <br />
        
            </div>
            <button className="btn btn-xs	 btn-outline btn-primary mr-2">View Details</button>
        </div>
    );
};

export default Job;