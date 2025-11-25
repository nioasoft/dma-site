'use client';

import styles from '@/app/contact/page.module.css';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('הטופס אינו פעיל כרגע. אינטגרציה עם Resend תבוצע בקרוב.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name">שם מלא</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="ישראל ישראלי"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">אימייל</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your@email.com"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone">טלפון</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="050-0000000"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">הודעה</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    placeholder="ספר לנו על הפרויקט שלך..."
                    rows={4}
                />
            </div>

            <button type="submit" className={styles.submitButton}>
                שלח הודעה
            </button>
        </form>
    );
}
