
const SingleCategoryList = ({jobCategory}) => {
    console.log(jobCategory.logo)
    const {availability,category_name,logo}=jobCategory;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={logo} alt="Shoes" className="rounded-xl" />
                    </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
            </div>
</div>
        </div>
    );
};

export default SingleCategoryList;