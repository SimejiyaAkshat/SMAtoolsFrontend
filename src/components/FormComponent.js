import React, { useState } from 'react';

const FormComponent = ({ onSubmit }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(websiteUrl)
  };

  return (
    <>
    <div>
      <form className='website-form' onSubmit={handleSubmit}>
        <input type='text' value={websiteUrl} id='site-name' onChange={(e) => setWebsiteUrl(e.target.value)} className='form-text-site' placeholder='Enter Site URL'></input>
        <button type="submit" id='submit' className='font-submit-btn'>Submit</button>
      </form>
    </div>
    </>
  );
};

export default FormComponent;
