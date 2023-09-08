interface Content3Props {
  isDarkMode?: boolean;
}

const Content03: React.FC<Content3Props> = ({ isDarkMode }) => {
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
      Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc 
      </div>
    </div>
  )
}

Content03.defaultProps = {
  isDarkMode: false
}

export default Content03