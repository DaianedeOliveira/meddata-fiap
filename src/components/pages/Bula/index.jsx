    import  { useState } from 'react';

    function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
        const apiUrl = `https://bula.vercel.app/pesquisar?nome=${encodeURIComponent(searchTerm)}&pagina=1`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
            setResults(data);
            setError(null);
            })
            .catch(error => {
            console.error('Erro ao buscar dados:', error);
            setResults([]);
            setError('Erro ao buscar dados. Tente novamente mais tarde.');
            });
        }
    };

    return (
        <div>
        <h1>Buscar Remédios</h1>
        <input
            type="text"
            placeholder="Digite o nome do remédio"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
        {error && <p>{error}</p>}
        <ul>
            {results.map((result, index) => (
            <li key={index}>{result.nome}</li>
            ))}
        </ul>
        </div>
    );
    }

export default SearchComponent;
