'use client';

import styles from '@/app/contact/page.module.css';
import { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'שגיאה בשליחת ההודעה');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'שגיאה בשליחת ההודעה');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Reset status when user starts typing again
        if (status === 'error' || status === 'success') {
            setStatus('idle');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.form}>
                <div className={styles.successMessage} role="alert">
                    <span className={styles.successIcon}>✓</span>
                    <h3>ההודעה נשלחה בהצלחה!</h3>
                    <p>נחזור אליך בהקדם.</p>
                    <button
                        type="button"
                        className={styles.submitButton}
                        onClick={() => setStatus('idle')}
                    >
                        שלח הודעה נוספת
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {status === 'error' && (
                <div className={styles.errorMessage} role="alert">
                    {errorMessage}
                </div>
            )}

            <div className={styles.formGroup}>
                <label htmlFor="name">שם מלא *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className={styles.input}
                    placeholder="ישראל ישראלי"
                    aria-required="true"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">אימייל *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className={styles.input}
                    placeholder="your@email.com"
                    aria-required="true"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone">טלפון *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className={styles.input}
                    placeholder="050-0000000"
                    aria-required="true"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">הודעה *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className={styles.textarea}
                    placeholder="ספר לנו על הפרויקט שלך..."
                    rows={4}
                    aria-required="true"
                />
            </div>

            <button
                type="submit"
                className={styles.submitButton}
                disabled={status === 'loading'}
                aria-busy={status === 'loading'}
            >
                {status === 'loading' ? 'שולח...' : 'שלח הודעה'}
            </button>
        </form>
    );
}
