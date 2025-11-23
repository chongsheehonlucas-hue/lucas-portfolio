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
        Recent posts from{' '}
        <a
          href="https://gov.sg"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>{' '}
        where I share insights and tutorials about web development.
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
      title: 'Building My VS Code Themed Portfolio',
      description: 'A walkthrough of how I customised a Next.js VS Code-themed portfolio.',
      url: '#', // or a real link later
      readable_publish_date: 'Today',
      tag_list: ['portfolio', 'nextjs', 'learning'],
    },
    {
      id: 2,
      title: 'My Networking & Cybersecurity Learning Journey',
      description: 'Notes and reflections from my labs on Cisco, Linux and security.',
      url: '#',
      readable_publish_date: 'Recently',
      tag_list: ['networking', 'cybersecurity'],
    },
  ];

  return {
    props: { title: 'Achievements', articles },
  };
}


export default ArticlesPage;
