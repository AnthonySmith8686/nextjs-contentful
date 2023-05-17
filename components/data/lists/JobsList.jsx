import JobCard from "../cards/JobCard";

export default function JobsList({ jobs }) {
  return (
    <div>
      <h2 className="text-2xl text-center mb-6">Current Jobs</h2>
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
}
