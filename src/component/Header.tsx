import { HeaderCon, HeaderIcon, HeaderView } from '../styles/Header'
import '../styles/assets.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { darkTheme, lightTheme } from '../styles/themes';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../store/type';
import {toggleTheme} from '../store/slice';

function Header() {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  const isTaskPath = location.pathname.startsWith("/task");
  const isTaskWithoutId = isTaskPath && location.pathname === "/task";
  const title = isRootPath ? 'Home' : isTaskWithoutId ? 'Add Task' : 'Edit Task';
  const navigate = useNavigate();
  const redirect = (path: string) => {
    if(path){
      navigate(path);
    }
  }
  const theme = useSelector((state: rootState) => state.data.theme);
  const dispatch = useDispatch()
  return (
    <HeaderView>
        <HeaderCon width='5%'>
            {title !== 'Home' && <div style={{width: '1rem', height: '1rem'}} className={theme === 'light' ? 'leftArrow' : 'leftArrowWhite'} onClick={() => redirect('/')} />}
        </HeaderCon>
        <HeaderCon width='90%' color={theme === 'light' ? lightTheme.textColor : darkTheme.textColor}>{title}</HeaderCon>
        <HeaderCon width='5%'>
            <HeaderIcon className={theme === 'light' ? 'sun' : 'moon'} onClick={() => dispatch(toggleTheme())} id='theme' />
        </HeaderCon>
    </HeaderView>
  )
}

export default Header