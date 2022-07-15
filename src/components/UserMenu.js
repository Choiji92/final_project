import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import HostModal from './HostModal';

const UserMenu = ({userImage,nickName}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <div style={{fontSize:'24px'}}>{nickName}</div>
         <img src={userImage} alt=""></img>
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Write>
        <MenuItem  onClick={()=>{
          navigate('/userwrite')
          handleClose()
        } }
        style={{ display:'flex',justifyContent:'center' ,color:'white',border:'none',borderRadius:'5px',backgroundColor:'#9090A0'}}>글쓰러 가기</MenuItem>
        </Write>
        
        <MenuItem><HostModal></HostModal></MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>마이페이지</MenuItem>
        <MenuItem onClick={()=>{
            localStorage.clear()
            handleClose()
            window.location.reload()
        }}>로그아웃</MenuItem>
      </Menu>
    </div>
  );
}

const Write = styled.div`
  margin: 10px;
  border-radius: 5px;
  width: 200px;

`
export default UserMenu