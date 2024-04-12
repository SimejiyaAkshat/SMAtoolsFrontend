import React, {useState } from 'react'
import FormComponent from '../components/FormComponent'
import PerformanceDataComponent from '../components/PerformanceData'

const Home = () =>  {

    const [performanceData, setPerformanceData] = useState(null);
  
  const handleSubmit = (websiteUrl) => {
    fetch('http://127.0.0.1:5000/calculate_metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ website_url: websiteUrl }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPerformanceData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
    return (
      <div className='container'>
        <FormComponent onSubmit={handleSubmit} />
        {performanceData && <PerformanceDataComponent data={performanceData} />}

        <div className="info-wrapper-div">
        <div>
          <h1>How is Percentage Calculated</h1>

          <p>The Percentage is calculated by taking some metrices and following few steps</p><br/>

          <h2>First the Weight for each parameters are assigned</h2>
          <p>loading_time_weight = 30<br/>time_to_first_byte_weight = 20<br/>page_size_weight = 25<br/>number_of_requests_weight = 25</p><br/>
          <h2>Normalize parameter values to the range of 0 to 100</h2>
          <p>Assign assumed maximum values for each parameters</p><br/>
          <h2>Calculate weighted average to obtain performance percentage</h2>
          <p>Sum of each normalized values divided by 100</p>
        </div>

        <div>
          <h1>How is Grade Calculated</h1>

          <p>Grade is calculated on the basis of the percentage score achieved</p>  

          <p>If percentage is grater than or equal to 90 Grade is A</p><br/>
          <p>If percentage is grater than or equal to 80 Grade is B+</p><br/>
          <p>If percentage is grater than or equal to 70 Grade is B</p><br/>
          <p>If percentage is grater than or equal to 60 Grade is C+</p><br/>
          <p>If percentage is grater than or equal to 50 Grade is C</p><br/>
          <p>If percentage is grater than or equal to 40 Grade is D+</p><br/>
          <p>If percentage is less than 40 Grade is D</p><br/>
        </div>
      </div>
      </div>
    )
}

export default Home