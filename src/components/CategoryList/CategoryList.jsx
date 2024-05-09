import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategoryList from "./SingleCategoryList";

const CategoryList = () => {
    const [jobCategories ,setJobCategories]=useState([])
    useEffect(()=>{
        fetch('../../../public/categories.json')
        .then(res=>res.json())
        .then(data=>setJobCategories(data))
    },[])
    

    return (
        <div>
            <div className="text-center">
            <h2 className="text-2xl font-bold">Job Category List</h2>
            <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            
        </div>
            <div className="grid my-12  grid-cols-1 md:grid-cols-4 gap-5">
                {
                    jobCategories.map(jobCategory=><SingleCategoryList jobCategory={jobCategory} key={jobCategory.id}></SingleCategoryList>)
                }
            </div>
        </div>
    );
};

export default CategoryList;