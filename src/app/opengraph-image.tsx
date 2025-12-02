import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'DMA - Intelligence in Infrastructure';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(100, 255, 218, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Accent lines */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #64ffda, #00bcd4)',
          }}
        />

        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: '120px',
              fontWeight: 'bold',
              color: '#64ffda',
              letterSpacing: '0.1em',
            }}
          >
            DMA
          </div>

          <div
            style={{
              fontSize: '32px',
              color: '#ccd6f6',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            Intelligence in Infrastructure
          </div>

          <div
            style={{
              marginTop: '40px',
              padding: '16px 32px',
              border: '2px solid #64ffda',
              borderRadius: '8px',
              fontSize: '24px',
              color: '#64ffda',
              direction: 'rtl',
            }}
          >
            בית חכם • אבטחה • תקשורת
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '18px',
            color: '#8892b0',
          }}
        >
          dma247.net
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
