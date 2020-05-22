import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Rodal from "rodal";
import 'rodal/lib/rodal.css';
import "./App.css";
import formSchema from "./components/formschema";
import Home from "./components/home";
import Form from "./components/form";


const initialFormValues = {
  name: "",
  size: "",
  toppings: {
    cheese: false,
    pepperoni: false,
    mushroom: false,
    sausage: false,
  },
  gluten: false,
  specialInt: "",
}

const App = () => {

  const [visible, setVisible] = useState(false)
  const [order, setOrder] = useState(initialFormValues);
  const [orderSum, setOrderSum] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [error, setErrors] = useState({});

  const postNewOrder = newOrder => {
    axios.post(`https://reqres.in/api/users`)
      .then(response => {
        console.log(response.data);
        setOrderSum([response.data, ...orderSum])
      })
      .catch(err => {
        console.log(error)
      })
  }

  const onChangeHandler = event => {
    const formName = event.target.name;
    const value = event.target.value;

    yup.reach(formSchema, formName)
      .validate(value)
      .then(valid => {
        setErrors({
          ...error,
          [formName]: '',
        })
      })
      .catch(err => {
        setErrors({
          ...error,
          [formName]: err.errors[0],
        })
      })

    setOrder({ ...order ,[formName]: value });
  }

  const onCheckboxChange = event => {
    const { name } = event.target;
    const { checked } = event.target;

    setOrder({
      ...order,
      toppings: {
        ...order.toppings,
        [name]: checked,
      },
      gluten: checked,
    })
  }

  const onSubmit = event => {
    event.preventDefault();

    const newOrder = {
      name: order.name,
      size: order.size,
      specialInstructions: order.specialInt,
      gluten: order.gluten,
      toppings: Object.keys(order.toppings)
        .filter(topping => order.toppings[topping] === true),
    }

    setOrder(initialFormValues);
    setOrderSum(...orderSum, newOrder)
    postNewOrder(newOrder);
    console.log("Submitted!");
    console.log(orderSum);
    console.log(newOrder);
  }

  useEffect(() => {
    formSchema.isValid(order)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [order])



  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pizza">
          <Form
            onChangeHandler={onChangeHandler}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            order={order}
            error={error}
            disabled={disabled}
          />
        </Route>
      </Router>
    </div>
  );
};
export default App;
