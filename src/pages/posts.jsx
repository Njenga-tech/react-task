import { useEffect, useState } from 'react';
import Card from '../components/card';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">📚 Posts</h1>

      <input
        type="text"
        placeholder="Search posts..."
        className="w-full p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="text-blue-500">Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {filtered.slice(0, 10).map((post) => (
        <Card key={post.id}>
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-600">{post.body}</p>
        </Card>
      ))}
    </div>
  );
}
