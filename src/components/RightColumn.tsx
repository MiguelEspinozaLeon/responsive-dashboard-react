import SalesComponent from "./SalesComponent"
import ScoreList from "./ScoreList"
import WebAnalytics from "./WebAnalytics"

const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <SalesComponent />
      <WebAnalytics />
      <ScoreList />
    </div>
  )
}

export default RightColumn