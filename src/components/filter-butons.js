export default function FilterButtons(){
    return(
        <div className="me-5">
            <select className="form-select form-select-lg mt-2" name="filter" aria-label="Large select example">
                <option selected>Sort by</option>
                <option value="1">A-Z</option>
                <option value="2">Actives</option>
                <option value="3">Inactives</option>
            </select>
        </div>
    )
}