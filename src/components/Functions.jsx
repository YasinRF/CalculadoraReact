import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button/Button";

const Functions = ({ onContentClear, onDelete }) => (
    <section className="functions">
        <Button type="button-long-text" text="C" clickHandler={onContentClear} />
        <Button type="borrar" text="&larr;" clickHandler={onDelete} />
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions
