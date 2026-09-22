import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileContent from './ProfileContent'

const MyProfile = () => {
  return (
    <div>
      {/* header */}
      <div className="filterButtons">
        <ProfileHeader />
      </div>

      {/* content */}
      <div className="filteredLead-list">
        <ProfileContent />
      </div>
    </div>
  )
}

export default MyProfile
