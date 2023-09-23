

const Category = ({ job }) => {
    const { id, logo, category_name, availability } = job
    return (
        <div>
            <div className="card  border shadow-xl bg-[#9873FF0D] lg:items-start items-center lg:pl-10 pt-3 lg:pt-10 pb-3 lg:pb-10">
                <div className="mb-8 w-20 h-20 pl-[18px] pt-[18px] rounded-lg bg-[#9873FF1A]">
                    <img className="w-10 h-10 " src={logo} alt="Shoes" />
                </div>
                <div className="">
                    <h2 className="card-title text-xl font-extrabold text-[#474747] mb-2">{category_name}</h2>
                    <p className="text-base font-medium text-[#A3A3A3]">{availability}</p>
                </div>
            </div>
        </div>
    );
};

export default Category;