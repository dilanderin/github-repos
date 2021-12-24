import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/',
  params: { per_page: 15 },
});

const RepositoryService = {
  fetchPopularRepos: async () =>
    API.get('/search/repositories?q=stars:>1&sort=stars').then(({ data }) => {
      return data.items;
    }),
  fetchRepoPulls: async (owner, repo) =>
    API.get(`/repos/${owner}/${repo}/pulls?state=all`).then(({ data }) => {
      return data;
    }),
  fetchRepoIssues: async (owner, repo) =>
    API.get(`/repos/${owner}/${repo}/issues?state=all`).then(({ data }) => {
      return data;
    }),
  fetchRepoContributors: async (owner, repo) =>
    API.get(`/repos/${owner}/${repo}/contributors`).then(({ data }) => {
      return data;
    }),
  searchRepos: async (query) =>
    API.get(`/search/repositories?q=${query}stars:>1&sort=stars`).then(
      ({ data }) => {
        return data.items;
      },
    ),
};

export default RepositoryService;
