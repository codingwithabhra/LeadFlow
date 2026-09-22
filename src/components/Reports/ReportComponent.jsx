import React from 'react'
import ReportHeader from './ReportHeader'
import ReportContent from './ReportContent'

const ReportComponent = () => {
  return (
    <div>
      {/* filterBtn */}
      <div className="filterButtons">
        <ReportHeader />
      </div>

      {/* filtered list */}
      <div className="filteredLead-list">
        <ReportContent />
      </div>
    </div>
  )
}

export default ReportComponent
