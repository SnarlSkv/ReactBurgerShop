import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
		className="item-block"
    speed={2}
    width={280}
    height={320}
    viewBox="0 0 280 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="15" rx="15" ry="15" width="260" height="190" /> 
    <rect x="10" y="220" rx="10" ry="10" width="260" height="30" /> 
    <rect x="30" y="270" rx="0" ry="0" width="60" height="40" /> 
    <rect x="140" y="265" rx="25" ry="25" width="110" height="45" />
  </ContentLoader>
)

export default Skeleton


