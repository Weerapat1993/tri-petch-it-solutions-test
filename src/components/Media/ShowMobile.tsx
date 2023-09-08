import { ReactNode } from "react";

interface ShowMobileProps {
  className?: string;
  children?: ReactNode;
}

const ShowMobile: React.FC<ShowMobileProps> = ({ children, className }) => {
  return (
    <div className={`sm:hidden ${className}`}>
      {children}
    </div>
  )
}

ShowMobile.defaultProps = {
  className: '',
  children: null
}

export default ShowMobile;
