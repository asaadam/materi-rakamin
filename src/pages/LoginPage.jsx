import { Button, Input, Form } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useHistory } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function LoginPage() {
  const [_, setUser] = useUser();

  const history = useHistory();

  const onFinish = (values) => {
    setUser({ name: values.username, isLogged: true });
    history.replace("/");
  };

  return (
    <Content style={{ minHeight: "100vh", padding: 16 }}>
      <div>
        <div
          style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}>
          <Form
            name='basic'
            initialValues={{ username: "adam" }}
            onFinish={onFinish}
            autoComplete='off'>
            <Form.Item
              label='Username'
              name='username'
              rules={[
                { required: true, message: "Please input your username!" },
                () => ({
                  validator(_, value) {
                    if (value.match(/^[0-9a-zA-Z]+$/)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Username only allow alphanumeric")
                    );
                  },
                }),
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label='email'
              name='email'
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              label='re-validate Email'
              name='re-validate'
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("email") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two email that you entered do not match!")
                    );
                  },
                }),
              ]}>
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Content>
  );
}
