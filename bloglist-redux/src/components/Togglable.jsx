/* eslint-disable react/display-name */
import { useState, forwardRef, useImperativeHandle } from "react";
import * as Mui from '@mui/material/'

const Togglable = forwardRef((props, refs) => {
    const [visible, setVisible] = useState(false);

    const hideWhenVisible = { display: visible ? "none" : "" };
    const showWhenVisible = { display: visible ? "" : "none" };

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    useImperativeHandle(refs, () => {
        return {
            toggleVisibility,
        };
    });

    return (
        <div>
            <div style={hideWhenVisible}>
                <Mui.Button onClick={toggleVisibility}>{props.buttonLabel}</Mui.Button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button onClick={toggleVisibility}>cancel</button>
            </div>
        </div>
    );
});

export default Togglable;
