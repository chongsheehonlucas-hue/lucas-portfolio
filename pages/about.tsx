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
              I mostly spend time on school tasks, but you may find me doing personal projects or indulged in my recreational activities
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Temasek Polytechnic</span> as
              Software Engineer 2, working with a lean team of 4 frontend
              engineers to build a next-gen video creation suite for the people
              of video.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve been leading the development efforts for bringing
              collaborative video reviewing and editing to the platform. I also
              maintain our in-house component library, icon library and website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}>100ms Blog</span>,{' '}
              <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read a good
              dystopian novel, listen to calm piano music or just laze around.
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
