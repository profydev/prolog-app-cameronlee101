import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingIndicator, ErrorAlert } from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    console.error(error);
    return <ErrorAlert suffix="the project data" />;
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
