import React from 'react'
import styles from './Card.module.css'

export default function Card({ item }) {
    return (
        <div className={styles.item}>
            <img className={styles.img} src={item.img} alt={item.title} />
            <h1 className={styles.title}>{item.title}</h1>
            <h4 className={styles.description}>{item.description}</h4>
            <h2 className={styles.price}>${item.price.toFixed(2)}</h2>
            <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                    <i
                        key={i}
                        className={`fa-solid fa-star ${i < item.rating ? styles.filled : ''}`}
                    ></i>
                ))}
            </div>
            <button style={{backgroundColor: item.color}}>Buy Now</button>
        </div>
    );
}

