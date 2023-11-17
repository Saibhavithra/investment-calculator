import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import UserInput from './Component/UserInput/UserInput';
import ResultTable from './Component/Result Table/ResultTable';

function App() {
  
    const [userInput, setUserInput] = useState(null);
    const calculateHandler = (userInput) => {
      setUserInput(userInput)
    };
    //Using Derived State: yearlyData is based on userInput state.
    const yearlyData = []; // per-year results
    if (userInput) {
      let currentSavings = +userInput['current-savings']; 
      const yearlyContribution = +userInput['yearly-contribution'];
      const expectedReturn = +userInput['expected-return'] / 100;
      const duration = +userInput['duration'];
      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
    }
    return (
      <div>
        <Header />
        <UserInput onCalc={calculateHandler} />
  
     
        {!userInput && <p style={{color:'green',textAlign: 'center'}}>No Investment Calculated Yet</p>}
        {userInput && <ResultTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
      </div>                  
    );
  }
  export default App;
