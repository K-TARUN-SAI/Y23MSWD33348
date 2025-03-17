import React from 'react'

const Video = () => {
  return (
    <div>
      <h2>My Video</h2>
      <video width="600" controls>
        <source src="/Certification.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
