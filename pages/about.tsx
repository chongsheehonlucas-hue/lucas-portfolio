import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Lucas Chong</h1>
        <div className={styles.subtitle}>Cybersecurity student</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I am a student from Temasek Polytechnic studying Cybersecurity and Digital Forensics
              I primarily specialize in <span className={styles.highlight}>Networking</span> and <span className={styles.highlight}>Penetration Testing.</span>
            </p>
            <p className={styles.paragraph}>
              I mostly spend time on school tasks, but you may find me doing personal projects or indulged in my recreational activities.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Temasek Polytechnic</span> as
              a Year 2, with striving aspirations for excellence and peckish 
              for <span className={styles.highlight}>knowledge</span>,
              even beyond curriculum.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve completed numerous IT relevant modules such as {' '}
              <span className={styles.highlight}>Computational Thinking</span>,{' '}
              <span className={styles.highlight}>Ethical Hacking</span>,{' '}
              <span className={styles.highlight}>Enterprise Networking</span>,{' '}
              <span className={styles.highlight}>Incident Reponse and Management</span> and more!
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of learning tools utilized 
              for cybersecurity such as{' '}
              <span className={styles.highlight}>Wireshark</span>,{' '}
              <span className={styles.highlight}>Metasploit</span>,{' '}
              <span className={styles.highlight}>Kali Linux</span> and 
              other tools in areas such as Networking.
  
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              When I&apos;m not tangled with programming and studying, I unwind by taking breaks and playing video games
              On certain occasions, I relieve myself from academics and destress by eating hearty meals!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
