import earnings from '../icons/earnings-icon.png';
import orders from '../icons/orders-icon.png';
import balance from '../icons/balance-icon.png';
import sales from '../icons/sales-icon.png';
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import './IconsChart.css';

const IconsChart = () => {
    return (
        <div className="row-class">
            <div className='earnings-icon'>
                <div className='earnings-master'>
                    <div className='earnings-child'>
                        <img className="earnings" src={earnings} alt="earnings"></img>
                        <div className='earnings-value'>
                            <div className='earning-summary'>
                                <div className='earning-label'><small>Earning</small></div>
                                <div className='earning-profit'>$198k</div>
                                <div className='earning-summary-text'>
                                    <small>
                                        <div className='earning-percentage'>
                                            <BiUpArrowAlt />
                                            37.8%&nbsp;
                                        </div>
                                        <div className='earning-span'>this month</div>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='orders-icon'>
                <div className='orders-master'>
                    <div className='orders-child'>
                        <img className="orders" src={orders} alt="orders"></img>
                        <div className='orders-value'>
                            <div className='orders-summary'>
                                <div className='orders-label'><small>Orders</small></div>
                                <div className='orders-trans'>$2.4k</div>
                                <div className='orders-summary-text'>
                                    <small>
                                        <div className='orders-percentage'>
                                            <BiDownArrowAlt />
                                            2%&nbsp;
                                        </div>
                                        <div className='orders-span'>this month</div>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='balance-icon'>
                <div className='balance-master'>
                    <div className='balance-child'>
                        <img className="balance" src={balance} alt="balance"></img>
                        <div className='balance-value'>
                            <div className='balance-summary'>
                                <div className='balance-label'><small>Balance</small></div>
                                <div className='balance-trans'>$2.4k</div>
                                <div className='balance-summary-text'>
                                    <small>
                                        <div className='balance-percentage'>
                                            <BiDownArrowAlt />
                                            2%&nbsp;
                                        </div>
                                        <div className='balance-span'>this month</div>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sales-icon'>
                <div className='sales-master'>
                    <div className='sales-child'>
                        <img className="sales" src={sales} alt="sales"></img>
                        <div className='sales-value'>
                            <div className='sales-summary'>
                                <div className='sales-label'><small>Total Sales</small></div>
                                <div className='sales-trans'>$89k</div>
                                <div className='sales-summary-text'>
                                    <small>
                                        <div className='sales-percentage'>
                                            <BiUpArrowAlt />
                                            11%&nbsp;
                                        </div>
                                        <div className='sales-span'>this month</div>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconsChart;