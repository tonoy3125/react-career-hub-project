import { CiLocationOn } from 'react-icons/ci';
import { BiDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const FeaturedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-compact bg-[#fff] border shadow-xl items-start">
                <figure className='mt-[40px] ml-4'><img className='w-[148px] h-[40px]' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-extralight text-[#474747]">{job_title}</h2>
                    <p className="text-xl font-semibold text-[#757575] mb-4">{company_name}</p>
                    <div className="flex gap-4 mb-4">
                        <button className="px-5 py-2 bg-white text-[#7E90FE] rounded border border-[#7E90FE] text-base font-extrabold">{remote_or_onsite}</button>
                        <button className="px-5 py-2 bg-white text-[#7E90FE] rounded border border-[#7E90FE] text-base font-extrabold">{job_type}</button>
                    </div>
                    <div className='flex items-center gap-6 mb-6'>
                        <div className='flex items-center gap-2'>
                            <CiLocationOn className='w-6 h-6 text-[#757575]'></CiLocationOn>
                            <p className='lg:text-xl font-semibold text-[#757575]'>{location}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BiDollarCircle className='w-6 h-6 text-[#757575]'></BiDollarCircle>
                            <p className='lg:text-xl font-semibold text-[#757575]'>Salary : {salary}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}><button className="px-[18px] py-[11px] bg-[#9873FF] text-white rounded text-xl font-extrabold">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;