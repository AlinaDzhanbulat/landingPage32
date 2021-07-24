import React from 'react';
import ReactDOM from 'react-dom';
import { Block1 } from './components/Block1/index1';
import { Block10 } from './components/Block10/index10';
import { Block2 } from './components/Block2/index2';
import { Block3 } from './components/Block3/index3';
import { Block4 } from './components/Block4/index4';
import { Block5 } from './components/Block5/index5';
import { Block6 } from './components/Block6/index6';
import { Block7 } from './components/Block7/index7';
import { Block8 } from './components/Block8/index8';
import { Block9 } from './components/Block9/index9';

ReactDOM.render(
  <React.StrictMode>
    <Block1 />
    <Block2 />
    <Block3 />
    <Block4 />
    <Block5 />
    <Block6 />
    <Block7 />
    <Block8 />
    <Block9 />
    <Block10 />
  </React.StrictMode>,
  document.getElementById('root')
);

