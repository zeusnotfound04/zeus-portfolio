import { userData } from "@/data/user-data";
import Contributions from "./components/contribution/index.jsx";
import HeroSection from "./components/hero-section";
import GitLanguage from "./components/language";
import Projects from "./components/projects";

async function getGitProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${userData.githubUser}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    });

    if (!res.ok) {
      console.error('Error fetching GitHub profile:', res.status, res.statusText);
      throw new Error(`GitHub profile fetch failed with status: ${res.status}`);
    }

    const profileData = await res.json();

    // Check if the required fields exist in the profile data
    if (!profileData.html_url) {
      console.error('Profile data missing "html_url" field');
      throw new Error('Profile data missing "html_url"');
    }

    return profileData;

  } catch (error) {
    console.error('Error in getGitProfile:', error.message);
    return null;  // Return null or a default profile object if the fetch fails
  }
}

async function getGitProjects() {
  const query = `user:${userData.githubUser} fork:false`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&per_page=10&type=Repositories`;

  const res = await fetch(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  });
  if (!res.ok) {
    console.error('Error fetching GitHub projects:', res.status, res.statusText);
    throw new Error('Failed to fetch GitHub projects');
  }
  return await res.json();
}

export default async function Home() {
  try {
    const profile = await getGitProfile();
    const projects = await getGitProjects();

    return (
      <>
        <HeroSection profile={profile} />
        <Projects projects={projects.items} profile={profile} />
        <GitLanguage />
        <Contributions />
      </>
    );
  } catch (error) {
    console.error('Error rendering Home:', error.message);
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>Unable to load GitHub data. Please try again later.</p>
      </div>
    );
  }
}

export async function generateMetadata() {
  try {
    const profile = await getGitProfile();
    return {
      title: `GitHub Profile of ${profile.name}`,
      description: profile.bio || "Explore this user's GitHub projects.",
    };
  } catch (error) {
    console.error('Error generating metadata:', error.message);
    return {
      title: 'GitHub Profile',
      description: 'Explore GitHub projects.',
    };
  }
}
