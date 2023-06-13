import React from 'react';
import "./ViewData.css";
import DataDetails from '../../component/Table/DataTable/data';

const ViewData = () => {
  return (
    <>
    <section className="data" id="data">
    <div className="content">
            <h3>UPLOADED MUSIC</h3>
        </div>
       <DataDetails/>
    </section>
    </>
  )
}

export default ViewData;
