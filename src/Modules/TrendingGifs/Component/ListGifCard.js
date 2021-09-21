import { Card } from "antd";

export default function GifCard({ imageUrl, username, title }) {
  return (
    <Card
      hoverable
      style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
      cover={<img alt='example' src={imageUrl} />}>
      <Card.Meta title={title} description={username || "Unknwon Username"} />
    </Card>
  );
}
