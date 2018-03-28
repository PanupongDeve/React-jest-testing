import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CheckboxWithLabel from './component/enzyme/CheckboxWithLabel'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CheckboxWithLabel labelOn={'LabelOn'} labelOff={'labelOff'} />, document.getElementById('root'));
registerServiceWorker();
