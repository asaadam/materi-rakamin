import { Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import SideBar from "./Sidebar";

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const [user, setUser, logout] = useUser();

  return (
    <Menu selectedKeys={[location.pathname]} mode='horizontal'>
      <Menu.Item>
        <SideBar />
      </Menu.Item>
      <Menu.Item key='/' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key='/user' icon={<UserOutlined />}>
        <Link to='/user'>Halaman User</Link>
      </Menu.Item>
      {!user.isLogged ? (
        <Menu.Item key='/login' icon={<LoginOutlined />}>
          <Link to='/login'>Login</Link>
        </Menu.Item>
      ) : (
        <Menu.Item key='/login' icon={<LogoutOutlined />} onClick={logout}>
          Logout
        </Menu.Item>
      )}
    </Menu>
  );
}
