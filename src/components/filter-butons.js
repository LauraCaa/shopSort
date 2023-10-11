export default function FilterButtons({ onFilterChange }){
    return(
        <div className="me-5">
            <select
                className="form-select form-select-lg mt-2"
                name="filter"
                aria-label="Large select example"
                onChange={(event) => onFilterChange(event.target.value)}
                defaultValue="Sort by"
            >
                <option value="Sort by">Sort by</option>
                <option value="alphabetical">A-Z</option>
                <option value="active">Actives</option>
                <option value="inactive">Inactives</option>
            </select>
        </div>
    )
}