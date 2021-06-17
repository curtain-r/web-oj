import React from 'react';
import { Link } from 'react-router-dom';
import './index.less'

export default function Header() {
  return (
    <>
      <header>
        <a href="https://www.baidu.com">
          <h4 className="logo">Brush<sub>web</sub></h4>
        </a>
        <nav>
          <ul>
            <li><Link to='/code1'>Code</Link></li>
            <li><Link to='/code2'>React ace</Link></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
