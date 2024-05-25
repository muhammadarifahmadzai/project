// FeedbackPage.js
import React from 'react';
import Navbar from './components/navbar';

function FeedbackPage() {
  return (
  <div>
    <Navbar/>
      <div className="container">
      <h1 className='text-3xl font-bold underline'>Feedback</h1>
      <form>
        <div className="form-group">
          <label htmlFor="feedbackTextarea">Your Feedback:</label>
          <textarea className="form-control" id="feedbackTextarea" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  );
}

export default FeedbackPage;
