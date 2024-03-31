import React, { useState } from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RiCustomerServiceLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";
import { TbChartDonut4 } from "react-icons/tb";
import { GoSidebarCollapse } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import './SideNav.css';

const SideNav = () => {
    const [navItem, setNavItem] = useState('Dashboard');
    return (
        <nav className="sidenav">
            <div className='nav-items'>
                <div className='nav-item'>
                    <TbChartDonut4 className='menu-item-icon' />
                    <span className='menu-item-text'>{navItem}</span>
                </div>
                <ul className='master-ul'>
                    <li className='align-menu-item'>
                        <div className={'nav-item-li ' + (navItem === 'Dashboard' ? 'nav-item-selected' : '')}>
                            <AiOutlineDashboard className='menu-item-icon' />
                            <a onClick={() => setNavItem('Dashboard')} className='menu-item-text' href="#">
                                Dashboard
                            </a>
                        </div>
                    </li>
                    <li className="align-menu-item">
                        <div className={'nav-item-li ' + (navItem === 'Product' ? 'nav-item-selected' : '')}>
                            <MdOutlineProductionQuantityLimits className='menu-item-icon' />
                            <a onClick={() => setNavItem('Product')} className='nav-menu-text' href="#">
                                Product
                            </a>
                            <GoSidebarCollapse className='nav-item-icon' />
                        </div>
                    </li>
                    <li className="align-menu-item">
                        <div className={'nav-item-li ' + (navItem === 'Customers' ? 'nav-item-selected' : '')}>
                            <RiCustomerServiceLine className='menu-item-icon' />
                            <a onClick={() => setNavItem('Customers')} className='nav-menu-text' href="#">
                                Customers
                            </a>
                            <GoSidebarCollapse className='nav-item-icon' />
                        </div>
                    </li>
                    <li className="align-menu-item">
                        <div className={'nav-item-li ' + (navItem === 'Income' ? 'nav-item-selected' : '')}>
                            <GiMoneyStack className='menu-item-icon' />
                            <a onClick={() => setNavItem('Income')} className='nav-menu-text' href="#">
                                Income
                            </a>
                            <GoSidebarCollapse className='nav-item-icon' />
                        </div>
                    </li>
                    <li className="align-menu-item">
                        <div className={'nav-item-li ' + (navItem === 'Promote' ? 'nav-item-selected' : '')}>
                            <RiAdvertisementFill className='menu-item-icon' />
                            <a onClick={() => setNavItem('Promote')} className='nav-menu-text' href="#">
                                Promote
                            </a>
                            <GoSidebarCollapse className='nav-item-icon' />
                        </div>
                    </li>
                    <li className="align-menu-item">
                        <div className={'nav-item-li ' + (navItem === 'Help' ? 'nav-item-selected' : '')}>
                            <MdOutlineLiveHelp className='menu-item-icon' />
                            <a onClick={() => setNavItem('Help')} className='nav-menu-text' href="#">
                                Help
                            </a>
                            <GoSidebarCollapse className='nav-item-icon' />
                        </div>
                    </li>
                </ul>
            </div>
            <div className='logged-in-container'>
                <div className='logged-in'>
                    <div className='nav-item-li nav-item-selected'>
                        <FaUserTie className='menu-item-icon' />
                        <a className='login-user-text' href="#">
                            <div>Gangadhar</div>
                            <small>Product Manager</small>
                        </a>
                        <RiArrowDropDownLine className='nav-item-icon' />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SideNav;
