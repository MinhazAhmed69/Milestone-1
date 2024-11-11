// src/components/About.js
import React from 'react';

const About = () => (
  <section style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
    <h2 style={{ fontSize: '2.5rem', color: '#333', textAlign: 'center' }}>About Us</h2>
    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
      Welcome to <strong>Maple & Oak</strong> — where coffee meets community. We’re more than just a cafe; we’re a neighborhood gathering space designed to feel like a second home. Our cozy ambiance, locally crafted beverages, and delightful treats make every visit memorable.
    </p>
    
    <section style={{ margin: '2rem 0' }}>
      <h3 style={{ fontSize: '2rem', color: '#555' }}>Our Story</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        What started as a passion project has grown into a beloved part of our community. My Cafe began as a small, inviting space with a commitment to high-quality coffee and a welcoming atmosphere. Sourcing ingredients locally and ethically, we've developed a menu that reflects our dedication to freshness and sustainability. Today, we continue to evolve, offering more delicious options while staying true to our roots.
      </p>
    </section>
    
    <section style={{ margin: '2rem 0' }}>
      <h3 style={{ fontSize: '2rem', color: '#555' }}>Our Offerings</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        We pride ourselves on offering a curated selection of treats and experiences that make every visit a pleasure. Here’s what you’ll find when you visit:
      </p>
      <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <li><strong>Specialty Coffee & Espresso</strong> – From smooth lattes to robust espressos, our coffee is crafted with care using the finest beans.</li>
        <li><strong>Artisanal Pastries & Desserts</strong> – Enjoy a variety of fresh, house-made treats that pair perfectly with our beverages.</li>
        <li><strong>Vegan & Gluten-Free Options</strong> – Inclusive and delicious options for every dietary need.</li>
        <li><strong>Comfortable Seating & Free Wi-Fi</strong> – A space designed for work, relaxation, or socializing with friends.</li>
        <li><strong>Live Music & Events</strong> – Join us for regular live performances and community gatherings that make our space come alive.</li>
      </ul>
    </section>

    <section style={{ margin: '2rem 0', textAlign: 'center' }}>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        Whether you’re here to savor a quiet moment with a cup of coffee, catch up with friends, or discover local music, we look forward to welcoming you. At My Cafe, it’s all about quality, community, and connection.
      </p>
    </section>
  </section>
);

export default About;