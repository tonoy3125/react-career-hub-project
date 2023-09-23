import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utilities/LocalStorage";


const Jobdetails = () => {




    const jobs = useLoaderData()
    const { id, job_description, educational_requirements, job_responsibility, experiences, salary, job_title, phone, email, address } = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleAppliedJob = () => {
        saveJobApplication(idInt)
        toast('You Have Applied Successfully')
    }


    return (
        <div className="mt-32 mb-32">
            <div className="grid md:grid-cols-4 gap-4">
                <div className=" md:col-span-3 text-center lg:text-left">
                    <div className=" lg:ml-10 mb-6 ">
                        <p className="text-[#1A1919] font-extrabold text-base mb-4">Job Description: </p>
                        <p className="font-medium text-base text-[#757575]">{job.job_description}</p>
                    </div>
                    <div className="lg:ml-10 mb-6 ">
                        <p className="text-[#1A1919] font-extrabold text-base mb-4">Job Responsibility:</p>
                        <p className="font-medium text-base text-[#757575]">{job.job_responsibility}</p>
                    </div>
                    <div className="lg:ml-10">
                        <p className="text-[#1A1919] font-extrabold text-base mb-4">Educational Requirements:</p>
                        <p className="font-semibold text-base text-[#757575]">{job.educational_requirements}</p>
                    </div>
                    <div className="lg:ml-10">
                        <p className="text-[#1A1919] font-extrabold text-base mb-4 mt-6">Experiences:</p>
                        <p className="font-semibold text-base text-[#757575]">{job.experiences}</p>
                    </div>
                </div>
                <div>
                    <div className="border lg:w-[424px]  bg-[#9873FF1A]">
                        <div className=" ml-6 lg:ml-12">
                            <h1 className="mt-7 mb-6 text-xl font-extrabold text-[#1A1919]">Job Details</h1>
                            <hr className="w-[364px] mx-auto bg-[#9873FF]" />
                            <div className="flex gap-2 items-center mt-6">
                                <AiOutlineDollar className='w-6 h-6 text-[#9873FF]'></AiOutlineDollar>
                                <p><span className="text-[#474747] text-xl font-extrabold">Salary : </span> <span className="text-[#757575] text-xl font-medium">{job.salary} (Per Month)</span></p>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <SlCalender className='w-6 h-5 mt-1 text-[#9873FF]'></SlCalender>
                                <p><span className="text-[#474747] text-xl font-extrabold">Job Title : </span><span className="text-[#757575] text-lg font-medium">{job.job_title}</span></p>
                            </div>
                            <h1 className="mt-7 mb-6 text-xl font-extrabold text-[#1A1919]">Contact Information</h1>
                            <hr className="w-[364px] mx-auto bg-[#9873FF]" />
                            <div className="flex gap-2 items-center mt-6">
                                <BsTelephoneFill className='w-6 h-5 text-[#9873FF]'></BsTelephoneFill>
                                <p><span className="text-[#474747] text-xl font-extrabold">Phone : </span><span className="text-[#757575] text-lg font-medium"> {job.contact_information.phone}</span></p>
                            </div>
                            <div className="flex gap-2 items-center mt-6">
                                <AiOutlineMail className='w-6 h-5 text-[#9873FF]'></AiOutlineMail>
                                <p><span className="text-[#474747] text-xl font-extrabold">Email : </span><span className="text-[#757575] text-lg font-medium"> {job.contact_information.email}</span></p>
                            </div>
                            <div className="flex gap-2 mt-6 pb-7">
                                <GrLocation className='w-6 h-5 mt-1 text-[#9873FF]'></GrLocation>
                                <p><span className="text-[#474747] text-xl font-extrabold">Address : </span><span className="text-[#757575] text-lg font-medium"> {job.contact_information.address}</span></p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleAppliedJob} className="w-full py-[19px] text-white bg-[#9873FF] rounded-lg text-center mt-6 lg:ml-6">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Jobdetails;