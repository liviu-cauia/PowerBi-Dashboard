'use client';

function Iframe({ src }) {
  return (
    <div>
      <iframe src={src} allowFullScreen={true}></iframe>
    </div>
  );
}

export default Iframe;
