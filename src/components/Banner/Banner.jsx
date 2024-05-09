import profile from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='my-5'>
            <div className='md:flex p-5 items-center justify-around'>
            <div className="text-5xl font-semibold space-y-2">
            <h3>One Step</h3>
            <h3>Closer To Your</h3>
            <h3><span className='text-primary'>Dream Job</span></h3>
            </div>
            <img className='w-96' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Banner;