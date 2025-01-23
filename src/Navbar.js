import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate();
    const navigateToPurchase = () => {
        navigate("/login");
    };
   // const menuList = ['여성','Divided','남성','신생아/유아', '아동','H&M HOME', '스포츠','Sale', '지속가능성']
    return (
        <div>
         {/*   <div>
                <div className='login-btn' onClick={navigateToPurchase}>
                    <FontAwesomeIcon icon={faUser} />
                    <div className='login'>로그인</div>
                </div>

            </div>*/}
          {/*  <div className='nav-logo'>
                <img width={150} src='https://i.pinimg.com/originals/31/5c/e5/315ce56cdff7fd54307760470bd9f2cf.png'/>
            </div>
            <div className='search'>
                <div className='search-bar'>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" placeholder='검색할 상품을 입력하세요.'/>
                </div>

            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu)=>(<li>{menu}</li>))}
                </ul>
            </div>*/}
        </div>
    )
}

export default Navbar