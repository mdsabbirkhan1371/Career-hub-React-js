

const SingleCategory = ({jobCategorie}) => {
    console.log(jobCategorie)
    const {category_name,availability,logo}=jobCategorie;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                    <img src={logo} alt="Shoes" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{availability}</p>
            
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;