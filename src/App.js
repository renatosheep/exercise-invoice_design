import React from "react";
import Title from './components/Title'
import Table from "./components/Table";
import Button from "./components/Button";
import './App.css'

export default function App() {
  return (
    <div className='box'>
      <Title>Invoice</Title>
      <Table/>
      <Button>Pay Now</Button>
    </div>
  );
}
