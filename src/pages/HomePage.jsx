import { Button, Typography, Modal, Input, Form, DatePicker } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import "moment/locale/id";
import locale from "antd/lib/locale/id_ID";

const { Title } = Typography;
export default function HomePage() {
  const showModal = () => {
    Modal.confirm({
      title: <Button>Ini modal </Button>,
      content: (
        <Form layout='vertical'>
          <Form.Item
            label='Username'
            name='username'
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Input />
          </Form.Item>
        </Form>
      ),
    });
  };

  const [user] = useUser();
  const [date, setDate] = useState();

  function onChange(date, dateString) {
    setDate(dateString);
  }
  return (
    <div className='App'>
      <Title>Halaman Utama</Title>
      <h4>Halo {user.name}</h4>
      {user.isLogged ? (
        <p>
          Menuju Halaman User{" "}
          <Link to='/user'>
            <button>Disini</button>
          </Link>
        </p>
      ) : (
        <p>
          Silahkan Login{" "}
          <Link to='/login'>
            <Button
              type='primary'
              style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
              Disini
            </Button>
          </Link>
        </p>
      )}
      <Button type='ghost' onClick={showModal}>
        Show Modal
      </Button>

      <DatePicker onChange={onChange} format='DD MMMM YYYY' locale={locale} />

      <Typography.Title level={3}>{date}</Typography.Title>
    </div>
  );
}
