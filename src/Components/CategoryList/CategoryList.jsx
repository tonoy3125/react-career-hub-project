import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div className="mb-32">
            <h1 className="text-5xl font-extrabold text-[#1A1919] text-center mb-4">Job Category List</h1>
            <p className="text-base text-[#757575] font-medium text-center mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    category.map(job => <Category key={job.id} job={job}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;