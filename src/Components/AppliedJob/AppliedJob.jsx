import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilities/LocalStorage";
// import AppliedJob from './AppliedJob';
import ShowAppliedJob from "../ShowAppliedJob/ShowAppliedJob";


const AppliedJob = () => {
    const jobs = useLoaderData()
    const [allappliedJobs, setAllAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    const [dataFound, setDataFound] = useState(false)
    const [isShow, setIsShow] = useState(2)


    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(allappliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = allappliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = allappliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }



    useEffect(() => {
        const storedJobId = getStoredJobApplication()
        console.log(storedJobId)
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobId.includes(job.id))
            // console.log(jobs,storedJobId,jobsApplied)
            setAllAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }

        if (storedJobId.length == 0) {
            setDataFound('No Data Found')
        }


        // console.log('no data found', dataFound)



    }, [jobs])


    const handleRemove = () => {
        localStorage.clear()
        setDisplayJobs([])
        setDataFound('No Data Found')
        // setDataFound('no data found')
    }


    return (
        <div>
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1 items-center">Filter By <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#474747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></span></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </div>
            <div>
                {dataFound ? <p className="h-80vh flex justify-center items-center mb-5">{dataFound}</p> :
                    // {allappliedJobs.length > 0 && <button onClick={handleremove}>Delete all</button>}

                    <div>
                        {allappliedJobs.length > 0 && <button onClick={handleRemove} className="px-5 bg-green-200 block mx-auto">Delete all</button>}
                        <div className="mb-10 lg:mb-32 mt-8">
                            {
                                displayJobs.slice(0, isShow).map(job => <ShowAppliedJob key={job.id} job={job}></ShowAppliedJob>)
                            }
                        </div>
                        <div className={isShow === jobs.length ? 'hidden' : ''}>
                            <button onClick={() => setIsShow(jobs.length)} className="px-5 mb-5 bg-green-200 block mx-auto">Show all</button>
                        </div>
                        {/* {allappliedJobs.length > 2 && <div>
                            <button onClick={()=>setIsShow(jobs.length)} className="px-5 mb-5 bg-green-200 block mx-auto">Show all</button>
                        </div>} */}
                    </div>}
            </div>
        </div>
    );
};

export default AppliedJob;