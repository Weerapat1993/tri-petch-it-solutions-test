

interface Content1Props {
  isMobile?: boolean;
}

const Content04: React.FC<Content1Props> = ({ isMobile }) => {
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
      Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
      </div>
    </div>
  )
}

Content04.defaultProps = {
  isMobile: false
}

export default Content04