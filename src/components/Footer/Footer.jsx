
import social from '../../assets/icons/social.png'
const Footer = () => {
    return (
        <div className="md:max-w-6xl mx-auto p-5 ">
            <footer className=" p-10 bg-base-200 text-base-content">
            <div className="footer">
            <aside>
                <img className='w-24' src={social} alt="" />
                <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
            </aside> 
                <nav>
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Legal</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
    </footer>
        </div>
    );
};

export default Footer;