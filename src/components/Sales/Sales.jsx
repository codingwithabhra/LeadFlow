import React from 'react'
import ListbyStatusContent from './ListbyStatusContent'
import FilterLeadListButtons from './FilterLeadListButtons'

const Sales = () => {
  return (
    <div>
      {/* filterBtn */}
      <div className="filterButtons">
        <FilterLeadListButtons />
      </div>

      {/* filtered list */}
      <div className="filteredLead-list">
        <ListbyStatusContent />
      </div>
    </div>
  )
}

export default Sales
