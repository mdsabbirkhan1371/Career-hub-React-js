import { useEffect, useState } from "react";
import SingleCategory from "../SingleCategory/SingleCategory";

const CategoryList = () => {
    const [jobCategories ,setJobCategories]=useState([])
    useEffect(()=>{
        fetch('../../../public/categories.json')
        .then(res=>res.json())
        .then(data=>setJobCategories(data))
    },[])
    

    return (
        <div>
            <div className="text-center my-5">
            <h2 className="text-2xl font-bold">Job Category List</h2>
            <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            
            
        </div>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                {
                    jobCategories.map(jobCategorie=> <SingleCategory key={jobCategorie.id} jobCategorie={jobCategorie}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryList;