import moment from 'moment';

export function getProjectsFromItems(items) {
  const projects = [];

  Object.keys(items).forEach((id) => {
    const { contentType } = items[id];

    if (contentType === 'project') {
      projects.push(id);
    }
  });

  return projects;
}

export function getProjectDisplayDateUnix({ displayDate }) {
  return moment(displayDate).unix();
}

export function sortProjects(projects, items) {
  if (projects.length <= 1) {
    return projects;
  }

  projects.sort((a, b) => {
    const projectA = items[a];
    const projectB = items[b];
    const dateA = getProjectDisplayDateUnix(projectA);
    const dateB = getProjectDisplayDateUnix(projectB);
    return dateB - dateA;
  });

  return projects;
}

export function getSortedProjectsFromItems(items) {
  const projects = getProjectsFromItems(items);
  return sortProjects(projects, items);
}
