import { client } from "./client";
import { jobReducer } from "./utils";

export const getJobs = async () => {
  const res = await client.getEntries({ content_type: "job" });
  const rawJobs = res.items;
  const jobs = rawJobs.map((rawJob) => {
    return jobReducer(rawJob);
  });
  return jobs;
};

export const getSlugs = async () => {
  const rawSlugs = await client.getEntries({
    content_type: "job",
    select: ["fields.slug"],
  });
  const slugs = rawSlugs.items.map((rawSlug) => rawSlug.fields.slug);
  return slugs;
};

export const getJobBySlug = async ({ slug }) => {
  const found = await client.getEntries({
    content_type: "job",
    "fields.slug": slug,
    include: 2,
  });

  if (found.items.length == 0) return null;
  const foundJob = found.items[0];
  const job = jobReducer(foundJob);

  return job;
};
