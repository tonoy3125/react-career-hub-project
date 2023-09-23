import banner  from "../../../images/images/user.png";

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between mb-32 bg-[#9873FF0D] lg:text-start text-center mt-4 lg:mt-12">
            <div className="">
                <h1 className="text-5xl lg:text-[80px] font-extrabold pt-14 mb-6"><span className="text-[#1A1919]">One Step <br /> Closer To Your <br /> </span> <span className="text-[#9873FF]">Dream Job</span></h1>
                <p className="text-lg font-medium text-[#757575] mb-8">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                <button className="text-xl font-extrabold text-[#fff] px-3 py-3 lg:px-7 lg:py-5 bg-[#9873FF] rounded-lg mb-6 lg:mb-0">Get Started</button>
            </div>
            <div className="">
                <img className="" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;