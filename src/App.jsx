import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'devextreme/dist/css/dx.light.css';

import TableDocuments from './Components/TableDocuments';
import Document from './Components/Document';


function App() {

  let [recordId, setRecordId] = useState('')

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<TableDocuments recordId={recordId} setRecordId={setRecordId}/>}></Route>
          <Route path='/document/:recordId' element={<Document/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

