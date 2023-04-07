import React, { useEffect, useState, useRef } from 'react';
import {useParams} from 'react-router-dom'

import * as api from '../api';

import { DataGrid } from 'devextreme-react/data-grid';

const login = 'l12345678';
const password = 'p12345678';

function Document() {
  const [document, setDocument] = useState([]);


  const {recordId} = useParams();



  useEffect(() => {
    api.getdocument(login, password, recordId.substring(3)).then((res) => {
      setDocument(res.data.data1);
    });
  }, []);

  const pivotDataSource = {
    store: document,
    reshapeOnPush: true,
    paginate: false,
    postProcess: (results) => {
      const fields = Object.keys(results[0] || {});

      const rows = fields.map((field) => ({
        field: field,
        values: results.map((item) => item[field]),
      }));

      return rows;
    },
  };

  return (
    <div className='flex-wrap'>
      <div className='flex-element'>
        <DataGrid
          dataSource={pivotDataSource}
          allowColumnResizing={true}
          showBorders={true}
          columnMinWidth={50}
          rowAlternationEnabled={true}
          keyExpr='id_inst'
        ></DataGrid>
      </div>
      <div className='flex-element'>
        <DataGrid
          dataSource={pivotDataSource}
          allowColumnResizing={true}
          showBorders={true}
          columnMinWidth={50}
          rowAlternationEnabled={true}
          keyExpr='id_inst'
        ></DataGrid>
      </div>
    </div>
  );
}

export default Document;
