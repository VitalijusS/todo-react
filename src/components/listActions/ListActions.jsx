export function ListActions(props) {
  const { updateSorting, sortingAlgo } = props;
  return (
    <div className="list-actions">
      <div className="title">Rikiavimas</div>
      <button onClick={() => updateSorting('timeAsc')} className={sortingAlgo === 'timeAsc' ? 'active' : ''}>Laikas 0-9</button>
      <button onClick={() => updateSorting('timeDes')} className={sortingAlgo === 'timeDes' ? 'active' : ''}>Laikas 9-0</button>
      <button onClick={() => updateSorting('colorAsc')} className={sortingAlgo === 'colorAsc' ? 'active' : ''}>Spalva A-Z</button>
      <button onClick={() => updateSorting('colorDes')} className={sortingAlgo === 'colorDes' ? 'active' : ''}>Spalva Z-A</button>
      <button onClick={() => updateSorting('titleAsc')} className={sortingAlgo === 'titleAsc' ? 'active' : ''}>Pavadinimas A-Z</button>
      <button onClick={() => updateSorting('titleDes')} className={sortingAlgo === 'titleDes' ? 'active' : ''}>Pavadinimas Z-A</button>
    </div>
  )
}