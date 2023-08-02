import { IExperienceData } from "../../interfaces/inputExperience.interface";

interface AllJobsComponentProps {
  allJobsArray: IExperienceData[];
  handleDeleteJob: (id: number) => void;
  handleExpResumeData: (value: any, id: any) => void;
}

const AllJobsComponent: React.FC<AllJobsComponentProps> = ({
  allJobsArray,
  handleDeleteJob,
  handleExpResumeData
}) => {
  if (allJobsArray.length == 0) {
    return;
  }
  return (
    <>
      {allJobsArray.map((job) => (
        <div key={job.id}>
          <p>{job.companyName}</p>
          <button onClick={() => handleDeleteJob(job.id)}>DELETE</button>
          <button>EDIT</button>
          <div>
            <input
              type="text"
              name="posicion"
              value={job.posicion}
              onChange={(event) => {
                const value = event.target;
                handleExpResumeData(value, job.id);
              }}
            />
            <input
              type="text"
              name="companyName"
              value={job.companyName}
              onChange={(event) => {
                const value = event.target;
                handleExpResumeData(value, job.id);
              }}
            />
            <input
              type="text"
              name="lugar"
              value={job.lugar}
              onChange={(event) => {
                const value = event.target;
                handleExpResumeData(value, job.id);
              }}
            />
            <input
              type="date"
              name="fechaInicio"
              value={job.fechaInicio}
              onChange={(event) => {
                const value = event.target;
                handleExpResumeData(value, job.id);
              }}
            />
            <input
              type="date"
              name="fechaTermino"
              value={job.fechaTermino}
              onChange={(event) => {
                const value = event.target;
                handleExpResumeData(value, job.id);
              }}
            />
            <textarea
              name="description"
              value={job.description}
              onChange={(event) => {
                const value = event.target;
                handleExpResumeData(value, job.id);
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default AllJobsComponent;
