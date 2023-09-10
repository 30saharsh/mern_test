"use client"
import {useState} from 'react'
import axios from 'axios';

const page = () => {

const [Data, setData] = useState("");

const SubmitHandler = async (e) =>{
e.preventDefault();
const response = await axios.get("https://testing-backend-cnv7.onrender.com/");
setData(response.data);
}

  return (
    <div>
    <button onClick={SubmitHandler}>Get Data</button>
    <h1>{Data.message}</h1>
    </div>
  )
}

export default page
