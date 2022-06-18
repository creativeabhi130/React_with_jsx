import React from "react";

function Welcome(props) {
    return <h1>
        Hello,{props.name}
    </h1>;
    const root = ReactDOM.creatRoot(documnet.getElementByid('root'));
    const element = <Welcome name='Abhishek Kumar' />;
    root.render(element);
}
export default Welcome;