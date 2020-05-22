import React from "react";
import { Link } from "react-router-dom";

const Form = props => {

    const {
        onChangeHandler,
        onCheckboxChange,
        onSubmit,
        error,
        order,
        disabled
    } = props;

    return (
        <form className="formContainer">

            <h1>Fresh Pizza, Made for You</h1>

            <p className="error">{error.name}</p>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name"
                value={order.name}
                onChange={onChangeHandler}
            />

            <p className="error">{error.size}</p>
            <select
                value={order.size}
                name="size"
                onChange={onChangeHandler}
            >
                <option value="select">Select Pizza Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xl">Extra Large</option>
            </select>

            <p className="error">{error.topping}</p>
            <label>Pick at Least One Topping:</label>
            <div className="toppings">
                <label>Cheese</label>
                <input type="checkbox" name="cheese"
                    value={order.toppings.cheese}
                    onChange={onCheckboxChange}
                />
                <label >Pepperoni</label>
                <input type="checkbox" name="pepperoni"
                    value={order.toppings.pepperoni}
                    onChange={onCheckboxChange}
                />
                <label >Mushroom</label>
                <input type="checkbox" name="mushroom"
                    value={order.toppings.mushroom}
                    onChange={onCheckboxChange}
                />
                <label >Sausage</label>
                <input type="checkbox" name="sausage"
                    value={order.toppings.sausage}
                    onChange={onCheckboxChange}
                />
            </div>


            <label htmlFor="specialInt">Special Instructions:</label>
            <textarea
                value={order.specialInt}
                name="specialInt"
                cols="30"
                rows="5"
                onChange={onChangeHandler}
            />

            <label htmlFor="gluten">Gluten Free Replacement:</label>
            <input type="checkbox" className="gluten" name="gluten" />

            <button
                className="order"
                onClick={onSubmit}
            // disabled={disabled}
            >Place Order</button>
        </form>
    )
}

export default Form;