export default function SearchBar({ onSearchChange }) {
    function handleSearchChange(event) {
        onSearchChange(event.target.value);
    }

    return (
        <div>
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleSearchChange}
                />
            </form>
        </div>
    );
}
