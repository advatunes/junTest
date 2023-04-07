import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as api from '../api';

import { DataGrid, HeaderFilter } from 'devextreme-react/data-grid';

const login = 'l12345678';
const password = 'p12345678';

export default function TableDocuments({ recordId, setRecordId }) {
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api.getdocumentlist(login, password).then((res) => setRecords(res.data));
  }, []);

  function handleRowDblClick(e) {
    const id = e.data.id_record;
    setRecordId(id);
    // localStorage.setItem('recordId', id);

    navigate({ pathname: `/Document/id=${id}` });
  }

  useEffect(() => {
    const id = localStorage.getItem('recordId');
    if (id) {
      setRecordId(id);
      localStorage.removeItem('recordId');
    }
  }, []);

  return (
    <>
      <DataGrid dataSource={records} keyExpr='id_pos' onRowDblClick={handleRowDblClick}>
        <HeaderFilter visible={true} />
      </DataGrid>
    </>
  );
}
