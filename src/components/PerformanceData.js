import React from 'react';

const PerformanceDataComponent = ({ data }) => {
  return (
    <>
    <div className='grade-scores'>
      <div className='grade-card grade-card-1'>
        <h2>Grade:  {data.grade}</h2>

        <p>Percentage Score : <br/><span>{data.percentage_score}</span></p>

      </div>
      <div className='grade-card grade-card-2'>
        <p>Loading Time: <br/><span>{data.loading_time} ms</span></p>

        <p>Time to First Byte: <br/><span>{data.time_to_first_byte} ms</span></p>

        <p>Page Size: <br/><span>{data.page_size} KB</span></p>

      </div>

      
    </div>
    <p>Total Images : <span>{data.total_images}</span></p><br/>
    <p>Images Size : <span>{data.images_size} bytes</span></p><br/>
    </>
  );
};

export default PerformanceDataComponent;
