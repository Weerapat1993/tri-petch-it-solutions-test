import { ReactNode } from "react";

interface ShowDesktopProps {
  className?: string;
  children?: ReactNode;
}

const ShowDesktop: React.FC<ShowDesktopProps> = ({ children, className }) => {
  return (
    <div className={`max-sm:hidden overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

ShowDesktop.defaultProps = {
  className: '',
  children: null
}

export default ShowDesktop;
