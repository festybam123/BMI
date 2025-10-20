import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'
const BMI = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState();
    const [message, setMessage] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        if (height && weight) {
            const bmiValue = (weight / (height * height)).toFixed(2);
            setBMI(bmiValue);            
            
            if (bmiValue < 18.5) {
                setMessage('Underweight');
            } else if (bmiValue < 24.9) {
                setMessage('Normal weight');
            } else if (bmiValue < 29.9) {
                setMessage('Overweight');
            } else {
                setMessage('Obesecity');
            }
        } 
        
    }
    const resetForm = () => {
        setHeight('');
        setWeight('');
        setBMI(null);
        setMessage('');
    }
  return (
    <div className='main-div'>
        <form onSubmit={calculateBMI}>
             <h1>BMI Calculator</h1>
            <label htmlFor="height">
                Height(m) <br />
                <input type="number" placeholder='e.g 1.75' value={height} required onChange={(e) => setHeight(e.target.value)} />
            </label>
            <label htmlFor="weight">
                Weight (kg) <br />
                <input type="number"  placeholder='e.g 50' value={weight} required onChange={(e) => setWeight(e.target.value)}/>
            </label>
          <button type="submit" className='myB'>Calculate </button>
        </form>
        <div className='result'>
            <h2>Your BMI is: {bmi}</h2>
            <h2>{message}</h2>
            <button onClick={resetForm} className='myB'>Reset</button>
        </div>
    </div>
  )
}

export default BMI