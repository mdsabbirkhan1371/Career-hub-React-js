
import { useLoaderData, useParams } from 'react-router-dom';
import { IoLogoUsd,IoLocationSharp } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utilities/localstroage';




const JobsDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job= jobs.find(job=>job.id===idInt)
    console.log(job)
    const {job_description,job_responsibility,educational_requirements,experiences,contact_information,job_title,salary}=job;
   
    const handleApply =()=>{
        saveJobApplication(idInt)
        toast('Job Applied SuccessFully')
    }
   
    return (
        <div className='p-5'>
            <h4 className='text-center font-semibold my-12'>Jobs Details</h4>
            
            <div className='grid md:grid-cols-4 '>
                <div className='col-span-3 border p-5 mr-3 space-y-3 rounded-lg'>
                    <div>
                        <h2 className='font-semibold'>Job Description :</h2>
                        <small>{job_description}</small>
                    </div>
                    <div className='my-3'>
                        <h2 className='font-semibold'>Job Responsibility: </h2>
                        <small>{job_responsibility}</small>
                    </div>
                    <div>
                        <h2 className='font-semibold'>Educational Requirements:</h2>
                        <small>{educational_requirements}</small>
                    </div>
                    <div>
                        <h2>Experiences :</h2>
                        <small>{experiences}</small>
                    </div>
                    
                </div>
                <div className='border p-3 rounded-lg col-span-1 text-black bg-slate-400'>
                    <h3 className='font-semibold border-b-2 my-2'>Job Details</h3>
                    <div className='flex items-center'>
                        <IoLogoUsd />
                        <h3 className='font-semibold'>Salary: <small>{salary}</small></h3>
                    </div>
                    <div className='flex items-center my-2'>
                        <FaAddressCard />
                        <h3 className='ml-2 font-semibold'>Job Title: <small>{job_title}</small></h3>
                    </div>

                    <div >

                        <h2 className='font-semibold border-b-2'>Contact Information</h2>

                        <div className='flex items-center mb-2'>
                            <FaPhoneFlip />
                            <h3 className='ms-1 font-semibold'>Phone: <small>{contact_information.phone}</small></h3>
                        </div>
                        <div className='flex items-center mb-2'>
                        <MdEmail />
                            <h3 className='ms-1 font-semibold'>Email: <small>{contact_information.email}</small></h3>
                        </div>
                        <div className='flex items-center mb-2'>
                            <IoLocationSharp />
                            <h3 className='ms-1 font-semibold'>Phone: <small>{contact_information.address}</small></h3>
                        </div>
                        <div>
                        <button onClick={handleApply} className="btn btn-outline btn-secondary w-full flex-grow">Apply Now</button>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
            
        </div>
    );
};

export default JobsDetails;