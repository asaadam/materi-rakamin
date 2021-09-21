import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { axiosInstace } from "../../../shared/AxiosInstance";
import TableGif from "./Table";
import { Pagination } from "antd";
import GifCard from "./ListGifCard";

const columns = [
  {
    title: "Gif Name",
    dataIndex: "title",
    key: "gifname",
    width: 400,
  },
  {
    title: "User Name",
    dataIndex: "username",
    key: "username",
    render: (username) =>
      username ? (
        <p>{username}</p>
      ) : (
        <p style={{ color: "red" }}>Unknown Username</p>
      ),
  },
  {
    title: "Image",
    dataIndex: "images",
    key: "image",
    render: (image) => (
      <img src={image.downsized.url} alt='test' height={100} width={100} />
    ),
  },
];

export default function TableContainer() {
  const [dataSource, setDataSource] = React.useState([]);
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  const [page, setPage] = React.useState(1);
  const onPageChange = (page) => {
    setPage(page);
    history.push({ pathname: "/", search: `?page=${page}` });
  };

  useEffect(() => {
    const data = new URLSearchParams(location.search);
    setPage(data.get("page") ? parseInt(data.get("page"), 10) : 1);
  }, [location.search]);

  useEffect(() => {
    const getTrendingGifs = async () => {
      setIsLoading(true);
      const { data } = await axiosInstace.get("/trending", {
        params: { limit: 10, offset: (page - 1) * 10 },
      });
      setDataSource(data);
      setIsLoading(false);
    };
    getTrendingGifs();
  }, [page]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      {width < 756 ? (
        dataSource?.data?.map((data) => (
          <GifCard
            imageUrl={data.images.downsized.url}
            title={data.title}
            username={data.username}
          />
        ))
      ) : (
        <TableGif
          columns={columns}
          dataSource={dataSource}
          isLoading={isLoading}
          page={page}
          onPageChange={onPageChange}
        />
      )}

      <Pagination
        style={{
          paddingTop: 24,
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: 24,
        }}
        onChange={onPageChange}
        defaultCurrent={1}
        current={page}
        total={dataSource?.pagination?.total_count}
        showSizeChanger={false}
      />
    </>
  );
}
