import React, { Component, useState } from 'react';
import Questions from './Questions.js'

const Triage = ({ decisionTree }) => {
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(decisionTree);
  
    const handleResponse = (response) => {
      const updatedAnsweredQuestions = [
        ...answeredQuestions,
        { ...currentQuestion, response }
      ];
      setAnsweredQuestions(updatedAnsweredQuestions);
  
      if (response === 'yes' && currentQuestion.yes) {
        setCurrentQuestion(currentQuestion.yes);
      } else if (response === 'no' && currentQuestion.no) {
        setCurrentQuestion(currentQuestion.no);
      }
    };
  
    const handleEdit = (index) => {
      const editedQuestions = answeredQuestions.slice(0, index);
      setAnsweredQuestions(editedQuestions);
  
      setCurrentQuestion(answeredQuestions[index]);
    };
  
    const resultButtonStyle = {
      borderRadius: '5px',
      background: 'blue',
      color: 'white',
      padding: '5px 10px',
      margin: '5px',
      cursor: 'pointer',
    };
  
    const editButtonStyle = {
      borderRadius: '5px',
      background: 'white',
      color: 'black',
      padding: '5px 10px',
      margin: '5px',
      cursor: 'pointer',
    };
  
    const questionBoxStyle = {
      border: '2px solid #ccd',
      borderRadius: '1rem',
      padding: '10px',
      margin: '10px',
    };
  
    return (
      <div>
        {answeredQuestions.map((answeredQuestion, index) => (
          <div key={index} style={questionBoxStyle}>
            <p>{`${index + 1}. ${answeredQuestion.question}`}</p>
            <p>Response: {answeredQuestion.response}</p>
            <p>{answeredQuestion.result}</p>
            {answeredQuestion.link && (
              <button style={resultButtonStyle} onClick={() => window.open(answeredQuestion.link, '_blank')}>Visit Page</button>
            )}
            <button style={editButtonStyle} onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
  
        <div style={questionBoxStyle}>
          <h3>{currentQuestion.question}</h3>
          {currentQuestion.yes && (
            <button style={resultButtonStyle} onClick={() => handleResponse('yes')}>Yes</button>
          )}
          {currentQuestion.no && (
            <button style={resultButtonStyle} onClick={() => handleResponse('no')}>No</button>
          )}
          <p>{currentQuestion.result}</p>
          {currentQuestion.link && (
            <button style={resultButtonStyle} onClick={() => window.open(currentQuestion.link, '_blank')}>View Available EDs</button>
          )}
        </div>
      </div>
    );
  };
  

export class VirtualTriage extends Component {
  static displayName = VirtualTriage.name;

  render() {
    return (
        <div>
            <h1 className='mb-4'>Virtual Triage</h1>
            <Triage decisionTree={Questions}/>
        </div>
    );
  }
}
