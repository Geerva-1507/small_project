import React from 'react'
import "./App.css";
import PaginationTest from './components/1.pagination/test';
import DigitalClock from './components/2.DigitalClock/clock';
import CountdownTimerTest from './components/3.CountDownTimer/test';
import StepProgressBarTest from './components/4.StepProgressBar/test';
import RandomQuoteGenerator from './components/5.RandomQuoteGenerator';
import TooltipTest from './components/6.Tooltip/test';
import CurrencyConverter from './components/7.CurrencyConverter/index';
import FilterProducts from './components/8.FilterCards/index';
import TipCalculator from './components/9.TipCalculator/index';
import MusicPlayer from './components/10.MusicPlayer/index';
import ProgressBar from './components/11.CustomProgressBar/index';
import BMICalculator from './components/12.BMICalculator/index';
import ButtonRippleEffect from './components/13.ButtonRippleEffect/index';
import DragandDrop from './components/14.DragandDrop/index';
import FormValidation from './components/15.FormValidation/FormValidation';
import FileUpload from './components/16.File-Upload-with-preview/index';
import Quizapp from './components/17.Quizapp/Quizapp';
import NestedComments from './components/18.NestedComments/index';
import PDFViewer from './components/19.PDFViewer/PDFViewer';
import FirebaseTodo from './components/20. FirebaseTodo/index';
import FirebaseAuth from './components/21.FirebaseAuth/FirebaseAuth'



function App() {
  return (
    <div className='App'>
      <h1 className='title'>25 React Js Interview Projects</h1>
      <PaginationTest />
      <DigitalClock />
      <CountdownTimerTest />
      <StepProgressBarTest />
      <RandomQuoteGenerator />
      <TooltipTest />
      <CurrencyConverter />
      <FilterProducts />
      <TipCalculator />
      <MusicPlayer />
      <ProgressBar />
      <BMICalculator />
      <ButtonRippleEffect />
      <DragandDrop />
      <FormValidation />
      <FileUpload />
      <Quizapp />
      <NestedComments />
      <PDFViewer />
      <FirebaseTodo />
      <FirebaseAuth />
      
    </div>
  )
}

export default App; 
