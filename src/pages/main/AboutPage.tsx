import usePageTitle from '@/hooks/usePageTitle';

const AboutPage = () => {
  usePageTitle('About');

  return (
    <div className="flex justify-center items-center h-full mt-5">
      <h1 className="font-bold text-4xl text-primary">Lê Ngọc Thạch - LAB4</h1>
    </div>
  );
};

export default AboutPage;
