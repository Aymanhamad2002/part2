const Filter = ({handleFilterText}) => {
    return(<div>
        find countries
        <input onChange = {handleFilterText} />
        </div>)
}
export default Filter