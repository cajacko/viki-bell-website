import moment from 'moment';

export function getPostsFromItems(items) {
  const projects = [];

  Object.keys(items).forEach((id) => {
    const { contentType } = items[id];

    if (contentType === 'post') {
      projects.push(id);
    }
  });

  return projects;
}

export function getPostDisplayDateUnix({ displayDate }) {
  return moment(displayDate).unix();
}

export function sortPosts(projects, items) {
  if (projects.length <= 1) {
    return projects;
  }

  projects.sort((a, b) => {
    const projectA = items[a];
    const projectB = items[b];
    const dateA = getPostDisplayDateUnix(projectA);
    const dateB = getPostDisplayDateUnix(projectB);
    return dateB - dateA;
  });

  return projects;
}

export function getSortedProjectsFromItems(items) {
  const projects = getPostsFromItems(items);
  return sortPosts(projects, items);
}
