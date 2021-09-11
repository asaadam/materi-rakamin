import { Table, Pagination } from "antd";

export default function TableGif({
  dataSource,
  columns,
  isLoading,
  onPageChange,
  page,
}) {
  return (
    <div className='App'>
      <Table
        pagination={false}
        dataSource={dataSource.data}
        columns={columns}
        loading={isLoading}
      />
      <Pagination
        style={{ paddingTop: 24 }}
        onChange={onPageChange}
        defaultCurrent={1}
        current={page}
        total={dataSource?.pagination?.total_count}
        showSizeChanger={false}
      />
    </div>
  );
}
