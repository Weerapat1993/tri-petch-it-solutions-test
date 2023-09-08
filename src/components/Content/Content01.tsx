

interface Content1Props {
  isMobile?: boolean;
}

const Content01: React.FC<Content1Props> = ({ isMobile }) => {
  return (
    <div>
      <div className="row">
        <div className="col-auto mr-10 mt-10">
          <span className="font-title">01</span>
          <div className="underline"></div>
        </div>
        <div className="col-1">
          <h2 className={`font-sub-header${isMobile ? '-secondary' : ''}` }>CONNECTION</h2>
        </div>
      </div>
      <div className="font-description">
        Connect with coaches directly, you can ping coaches to view profile.
      </div>
    </div>
  )
}

Content01.defaultProps = {
  isMobile: false
}

export default Content01