import './LoggedInUser.css';
import { MdWavingHand } from "react-icons/md";

const LoggedInUser = () => {
    return (
        <div className="header">
            <div className="header-child">
                <div className="logged-in-user">
                    <div className='logged-in-user-clap'>
                        Hello Gangadhar!!
                        <MdWavingHand />
                    </div>
                </div>
            </div>
            <div className="header-child">
                <div className="search-box">
                    <input type="text" className='logged-in-user-search' placeholder="Search" />
                </div>
            </div>
        </div>
    )
}

export default LoggedInUser;