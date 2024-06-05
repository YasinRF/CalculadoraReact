import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button/Button";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3]

const renderButtons = onclickNumber => {
    const renderButton = number => (
        <Button
            key={number}
            text={number.toString()}
            clickHandler={onclickNumber}
        />
    )
    return numbers.map(renderButton)
}

const Numbers = ({ onclickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onclickNumber)
        }
        <Button type="cero" text="0" clickHandler={onclickNumber} />
    </section>
)

Numbers.propTypes = {
    onclickNumber: PropTypes.func.isRequired
}

export default Numbers;