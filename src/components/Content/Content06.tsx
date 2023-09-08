interface Content6Props {
  isDarkMode?: boolean;
}

const Content06: React.FC<Content6Props> = ({ isDarkMode }) => {
  return (
    <div>
      <div className="row">
        <div className="col-auto mr-10 mt-10">
          <span className={isDarkMode ? 'text-primary' : 'font-title'}>03</span>
          <div className={isDarkMode ? 'underline-white' : 'underline'}></div>
        </div>
        <div className="col-1">
          <h2 className="font-sub-header-secondary">GROWTH</h2>
        </div>
      </div>
      <div className={`font-description ${isDarkMode ? 'text-white' : ''}`}>
        Save your time, recruit proper athlets for your team.
      </div>
    </div>
  )
}

Content06.defaultProps = {
  isDarkMode: false
}

export default Content06