import Head from "next/head";
import {
  HelpToChoose,
  HeroSection,
  PopularServices,
  RegionsSection,
  SecondHeroSection,
  SelectedSection,
  Testimonials,
  ThirdHeroSection,
} from "../components";
import { data, tags, taskio, regions } from "../data";
export default function Home({ services, jobTags, taskios, allRegions }) {
  return (
    <div>
      <Head>
        <title>Taskio</title>
        <meta name="description" content="Taskio for your tasks" />
        <link rel="icon" href="/img/Taskio.svg" />
      </Head>
      <HeroSection jobTags={jobTags} />
      <PopularServices services={services} />
      <SecondHeroSection />
      <SelectedSection taskios={taskios} />
      <ThirdHeroSection />
      <HelpToChoose />
      <RegionsSection allRegions={allRegions} />
      <Testimonials />
    </div>
  );
}
export const getStaticProps = async () => {
  const services = data;
  const jobTags = tags;
  const taskios = taskio;
  const allRegions = regions;
  return {
    props: {
      services,
      jobTags,
      taskios,
      allRegions,
    },
  };
};
