import { useState, useEffect } from 'react'

// A component to fetch and display my github repositories. User can sort the repositories by newest or oldest.
export default function ReposBox() {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sort, setSort] = useState("new");

    useEffect(() => {
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/alridhaalqattan/repos")
            if (!response.ok) {
                throw new Error("Error fetching repositories");
            }
            return response.json();


        }
        fetchRepos()
            .then(data => {
                setRepos(data);
            })
            .catch(e => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    // Sort the repositories based on the selected sort option (newest or oldest)
    const sortedRepos = [...repos].sort((a, b) => (
        sort === "new" ? new Date(b.created_at) - new Date(a.created_at) : new Date(a.created_at) - new Date(b.created_at)
    ))

    return (<>

        {/* A dropdown to allow the user to sort the repositories */}
        <label htmlFor="sort">Sort by:</label>
        <select style={{ marginLeft: '10px', border: '1px solid #ccc', width: '100px', alignSelf: "center" }} id="sort" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
        </select>

        {loading && <p>Loading my repositories...</p>}
        {error && <p>Error: {error}</p>}
        {sortedRepos.map(repo => (<div key={repo.id}>
            <p style={{ fontWeight: 'bold' }}>Title: {repo.name}</p>
            <p style={{ fontStyle: 'italic' }}>Main language: {repo.language}</p>
            <p style={{ color: 'green' }}>Created at: {repo.created_at}</p>
            <a href={repo.html_url} target="_blank">View repository</a>

        </div>))}

    </>);
}