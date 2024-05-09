
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";
const SingleAppliedJobs = ({appliedJob}) => {
    console.log(appliedJob)
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=appliedJob;

    return (
        <div>
            <div className='flex items-center my-3 rounded-lg space-y-1'>
                <div>
                    <div className="card w-60 h-24 bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img src={logo} alt="Shoes" className="rounded-xl" />
                        </figure>
                    
                    </div>
                </div>
                <div>
                    <div>
                        <h4>{job_title} </h4>
                        <h3>{company_name}</h3>
                        <button className="btn btn-outline btn-sm	mr-3 btn-info">{remote_or_onsite}</button>
                        <button className="btn btn-outline btn-sm	 btn-info">{job_type}</button>
                    </div>
                    <div className="flex items-center">
                        <FaLocationDot/>
                        <p className="m-1"><small>{location}</small></p>
                        <IoLogoUsd />
                        <span><small>{salary}</small></span>
                    </div>
                    

                </div>
                <button className="ms-12 btn btn-outline btn-primary">View Details </button>
            </div>
        
            
        </div>
    );
};

export default SingleAppliedJobs