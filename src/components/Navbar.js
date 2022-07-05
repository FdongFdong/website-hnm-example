import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const search = (event) => {
    if (event.key === 'Enter') {
      console.log('event.key ', event.key);
      // 입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          로그인
        </div>
      </div>

      <div className="nav-section">
        <img
          width={100}
          margin={5}
          src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/c0a6a57f-e8a6-4c3d-a874-b9be0a1ecba9"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="nav-search">
          <div>
            <FontAwesomeIcon icon={faSearch} />
            <input
              placeholder="제품검색"
              onKeyPress={(event) => search(event)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
