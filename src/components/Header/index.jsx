import React from 'react';
import './index.less'

export default function Header() {
  return (
    <>
      <header>
        <a href="#">
          <h4 className="logo">Brush<sub>web</sub></h4>
        </a>
        <nav>
          <ul>
            <li><a href="#hero">刷题</a></li>
            <li><a href="#about">关于</a></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
