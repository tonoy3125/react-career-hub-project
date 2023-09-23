import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState([4])

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl font-extrabold text-[#1A1919] text-center mb-4">Featured Jobs</h1>
            <p className="text-base text-[#757575] font-medium text-center mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className="text-center mt-10 mb-32">
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button onClick={() => setDataLength(jobs.length)} className="text-xl font-extrabold text-[#fff] px-3 py-3 lg:px-7 lg:py-5 bg-[#9873FF] rounded-lg">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;