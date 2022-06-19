import styled from "styled-components";

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #181818;
  color: #f5f5f5;
  text-transform:uppercase;
  border: 1px solid red;
`;

const TableData = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #121212;
  color:#f1f1f1;
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  padding: 8px;
  text-align: left;

  &:hover {
    background-color: #ffffff;
  }
`;

const Table = ({ children, ...props }) => {
  return <TableContainer {...props}>{children}</TableContainer>;
};

const Row = ({ children, ...props }) => {
  return <TableRow {...props}>{children}</TableRow>;
};

const Header = ({ children, ...props }) => {
    return <TableHeader {...props}>{children}</TableHeader>;
}

const Data = ({ children, ...props }) => {  
    return <TableData {...props}>{children}</TableData>;
}

export { Table, Row, Header, Data };
