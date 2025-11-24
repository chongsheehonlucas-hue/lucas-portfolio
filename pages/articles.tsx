import ArticleCard from '@/components/ArticleCard';

import { Article } from '@/types';

import styles from '@/styles/ArticlesPage.module.css';

interface ArticlesPageProps {
  articles: Article[];
}

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Achievements</h1>
      <p className={styles.pageSubtitle}>
        A page dedicated to certificates{' '}
        {/* <a
          href="https://gov.sg"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>{' '} */}
         or awards I have achieved throughout my years.
      </p>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // You can customise this list any way you like
  const articles = [
    {
      id: 1,
      title: 'Edusave Award 2017',
      description: 'An award for improvement in academic performance and demonstrating good conduct.',
      url: 'https://drive.google.com/file/d/1evIacvZHrQapuX8d9UAuOxTHixe7v-I8/view?usp=drive_link', // or a real link later
      readable_publish_date: 'Today',
      cover_image: '/achievement/edusave2017.jpg',
      tag_list: ['portfolio', 'nextjs', 'learning'],
    },
    {
      id: 2,
      title: 'Edusave Award 2022',
      description: 'Edusave award for good merit.',
      url: 'https://drive.google.com/file/d/1WgNga0V8Z3gTs8VPkb7yXwf9ftjcOEuU/view?usp=drive_link',
      readable_publish_date: 'Recently',
      cover_image: '/achievement/edusave2022.jpg',
      tag_list: ['networking', 'cybersecurity'],
    },
    {
      id: 3,
      title: 'Edusave Award 2025',
      description: 'An award for improvement in academic performance and demonstrating good conduct.',
      url: 'https://drive.google.com/file/d/1KjTncUpSfLAOx2dW-DRi57e1W3cvU3qd/view?usp=drive_link',
      readable_publish_date: 'Recently',
      cover_image: '/achievement/edusave2025.jpg',
      tag_list: ['networking', 'cybersecurity'],
    },
    {
      id: 4,
      title: 'Completed the Sentinel Program 2024-2025',
      description: 'A program developed by the Digital and Intellegence Service(DIS) and sponsored by MINDEF.',
      url: 'https://drive.google.com/file/d/1M9_Uu5tFTlKzdo_Ruv9Ky2cI8banqOuV/view?usp=drive_link',
      readable_publish_date: 'Recently',
      cover_image: '/achievement/sentinelcert.jpg',
      tag_list: ['networking', 'cybersecurity'],
    },
    {
      id: 5,
      title: 'Partaking in Chemistry Olympiad 2023',
      description: 'Extended academic horizons by participating in chemistry olympiad beyond curriculum scope.',
      url: 'https://drive.google.com/file/d/17CBVnD2EgvWKjOB6WaAp9PBbINhNoy08/view?usp=drive_link',
      readable_publish_date: 'Recently',
      cover_image: '/achievement/chemolym.jpg',
      tag_list: ['networking', 'cybersecurity'],
    },
    {
      id: 6,
      title: 'Bronze award in Physics Olympiad 2023',
      description: 'An award for Junior Physics Olympiad across secondary schools.',
      url: 'https://drive.google.com/file/d/142EMdIDGgEUaS4Y5-6Lp9n6GRjBy71Vq/view?usp=drive_link',
      readable_publish_date: 'Recently',
      cover_image: '/achievement/physolym.jpg',
      tag_list: ['networking', 'cybersecurity'],
    },
    {
      id: 7,
      title: "Year 1 Director's list",
      description: 'A meritable award given to those who achieved top 10% in the cohort.',
      url: 'https://drive.google.com/file/d/1Fpz1tGLDqY5zMwG5ZM_-epcHUwfNKMag/view?usp=drive_link',
      readable_publish_date: 'Recently',
      cover_image: '/achievement/directorlist.jpg',
      tag_list: ['networking', 'cybersecurity'],
    },
    {
      id: 8,
      title: "Completed with Excellence University Math Prepatory Program",
      description: 'University preparatory program organized within TP, passed with excellence.',
      url: 'https://drive.google.com/file/d/1o89ng1FF7cYQLlcATjmZvaXwNWnHsuiI/view?usp=drive_link',
      readable_publish_date: 'Recently',
      cover_image: '/achievement/UPP Math cert.jpg',
      tag_list: ['networking', 'cybersecurity'],
    },
  ];

  return {
    props: { title: 'Achievements', articles },
  };
}


export default ArticlesPage;
