import { NextResponse } from 'next/server';
import { site } from '@/data/site';

const USERNAME = site.social.githubHandle.replace(/^@/, '');

export const revalidate = 3600; // cache for 1 hour

type Repo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
};

export async function GET() {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${USERNAME}/repos?per_page=10&sort=updated&type=owner`,
        { headers, next: { revalidate: 3600 } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json(
        { error: 'GitHub fetch failed', status: userRes.status },
        { status: 502 }
      );
    }

    const user = await userRes.json();
    const repos: Repo[] = await reposRes.json();

    return NextResponse.json({
      user: {
        login: user.login,
        name: user.name,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
        avatar_url: user.avatar_url,
      },
      repos: repos
        .filter((r) => !r.full_name.includes('.github.io'))
        .map((r) => ({
          name: r.name,
          url: r.html_url,
          description: r.description,
          language: r.language,
          stars: r.stargazers_count,
          updated: r.pushed_at,
        })),
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'GitHub fetch errored', detail: String(err) },
      { status: 500 }
    );
  }
}
