export default async function fetchSearchDetails(searchTerm) {
  const searchResults = await fetch(
    `https://music-app-backend-beta.vercel.app/api/search/songs?query=${searchTerm}&page=1&limit=20`
  );

  if (!searchResults.ok) return undefined;

  return searchResults.json();
}
