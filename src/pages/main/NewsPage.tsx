import usePageTitle from '@/hooks/usePageTitle';

const NewsPage = () => {
  usePageTitle('News');

  return (
    <div className="dark:text-white mt-5">
      <h1 className="font-bold text-4xl text-primary text-center">Latest News</h1>
    </div>
  );
};

export default NewsPage;
