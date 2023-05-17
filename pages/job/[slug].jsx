import JobDetails from "../../components/data/details/JobDetails";
import { getJobs, getSlugs, getJobBySlug } from "../../datalayer";

const JobDetailsPage = ({ job, slug }) => {
  return <JobDetails job={job} />;
};

export default JobDetailsPage;

export const getStaticPaths = async () => {
  const slugs = await getSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const job = await getJobBySlug({ slug });

  return {
    props: {
      job,
      slug,
    },
  };
};
