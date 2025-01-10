import Link from 'next/link';

const Footer = () => {
  return (
    <div style={{ fontSize: '0.75rem' }}>
      ©2023-{new Date().getFullYear()}, Built with 🏳️‍🌈 by{' '}
      <Link
        href='https://mountaintopcoding.dev'
        target='_blank'
        rel='noopener noreferrer'
      >
        mountainTopCoding(&#127956;);
      </Link>
    </div>
  );
};

export default Footer;
