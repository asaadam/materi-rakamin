import { Button, Typography, Upload, Form, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { uploadService } from "../UploadService";

export default function UploadGifs() {
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e.file;
  };

  const onFinish = async (e) => {
    const result = await uploadService(e.file, e.tags);
    console.log(result);
  };

  return (
    <div className='App'>
      <Typography.Title level={2}>Upload Gif Kesayanganmu</Typography.Title>
      <Form onFinish={onFinish}>
        <Form.Item name='file' label='Upload File' getValueFromEvent={normFile}>
          <Upload accept='image/gif' showUploadList={false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item name='tags' label='Insert Tags'>
          <Input />
        </Form.Item>
        <Button htmlType='submit'>Submit</Button>
      </Form>
    </div>
  );
}
