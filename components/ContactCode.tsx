import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'lucasdomain.com',
    href: 'https://www.tp.edu.sg/home.html',
  },
  {
    social: 'email',
    link: 'chongsheehonlucas@gmail.com',
    href: 'mailto:chongsheehonlucas@gmail.com',
  },
  {
    social: 'github',
    link: 'lucaschong123',
    href: 'https://github.com',
  },
  {
    social: 'linkedin',
    link: 'Lucas',
    href: 'https://www.linkedin.com/in/chongsheehonlucas/',
  },
  {
    social: 'twitter',
    link: 'Lucasster',
    href: '',
  },
  {
    social: 'telegram',
    link: 'lukas',
    href: '',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
