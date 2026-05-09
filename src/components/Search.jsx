function Search({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Type a name to search..."
      value={search}
      onChange={handleChange}
    />
  );
}
export default Search