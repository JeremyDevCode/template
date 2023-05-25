// Get pinned repositories from GitHub:
const url = "https://gh-pinned-repos.egoist.dev/?username=";

export interface iRepository {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: number;
}

export const getRepositories = async (username: string) => {
  const response = await fetch(`${url}${username}`);
  const data = await response.json();
  return data as iRepository[];
};
