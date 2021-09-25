import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
export default function SideBar() {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const onOpen = () => {
    setVisible(true);
  };

  return (
    <>
      <MenuOutlined style={{ fontSize: 24 }} onClick={onOpen} />
      <Drawer
        title='Basic Drawer'
        placement='left'
        onClose={onClose}
        visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
