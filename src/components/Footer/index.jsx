import React from 'react';
import './index.less';

export default function Footer() {
  return (
    <div className='footer'>
      <section className="footer_banner" id="contact">
        <p className="hero_header">前端友情链接 &amp; 支持一下</p>
        <div className="button">subscribe</div>
      </section>
      <div className="copyright">
        &copy;2021- <strong>Brush<sub>web</sub></strong>
      </div>
    </div>
  )
}
