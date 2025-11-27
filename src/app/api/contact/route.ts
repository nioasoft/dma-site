import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend only if API key exists
const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validation
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'כל השדות נדרשים' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'כתובת אימייל לא תקינה' },
                { status: 400 }
            );
        }

        // Check if Resend is configured
        if (!resend) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json(
                { error: 'שירות המייל לא מוגדר. אנא פנו אלינו בטלפון.' },
                { status: 503 }
            );
        }

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: 'DMA Contact Form <moshe@dma247.net>',
            to: ['moshe@dma247.net'],
            replyTo: email,
            subject: `פנייה חדשה מ-${name}`,
            html: `
                <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #cc9933; border-bottom: 2px solid #cc9933; padding-bottom: 10px;">
                        פנייה חדשה מאתר DMA
                    </h2>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 100px;">שם:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">אימייל:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                <a href="mailto:${email}">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">טלפון:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                <a href="tel:${phone}">${phone}</a>
                            </td>
                        </tr>
                    </table>

                    <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
                        <h3 style="margin-top: 0; color: #333;">הודעה:</h3>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>

                    <p style="margin-top: 30px; color: #888; font-size: 12px; text-align: center;">
                        הודעה זו נשלחה מטופס יצירת הקשר באתר dma247.net
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'ההודעה נשלחה בהצלחה!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'שגיאה בשרת. נסה שוב מאוחר יותר.' },
            { status: 500 }
        );
    }
}
