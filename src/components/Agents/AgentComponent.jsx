import React from 'react'
import AgentList from './AgentList'
import SearchAgentByName from './SearchAgentByName'

const AgentComponent = () => {
  return (
    <div>
      {/* search by name */}
      <div className="filterButtons">
        <SearchAgentByName />
      </div>

      {/* agent list */}
      <div className="filteredLead-list">
        <AgentList />
      </div>
    </div>
  )
}

export default AgentComponent
