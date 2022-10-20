import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('display form with initial values', ()=>{
  render(<App/>)
  const eur= screen.getByTestId('eur')
  const gbp= screen.getByTestId('gbp')
  expect(eur).toHaveValue('0')
  expect(gbp).toHaveTextContent(0)
})
test('Change euros', ()=> {
  render(<App/>)
  const eur=screen.getByTestId('eur')
  fireEvent.change(eur,{target: {value: '10'}})
  expect(eur).toHaveValue('10')
})
test('Calculate conversion', ()=>{
  render(<App/>)
  const eur= screen.getByTestId('eur')
  const gbp=screen.getByTestId('gbp')
  const calculateBtn=screen.getByTestId('calculate')
  fireEvent.change(eur,{target:{value: '10'}})
  fireEvent.click(calculateBtn)
  expect(gbp).toHaveTextContent('8.7')
})
