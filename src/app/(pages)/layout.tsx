import Header from "../../app/_layouts/headers/Index";
import Footer from "../../app/_layouts/footers/Index";

const PagesLayouts = ({
    children,
  }: {
    children: React.ReactNode;
}) => {
  return (
    <>
      <Header layout={"default"} />
      {/* dynamic content */}
      <div id="sb-dynamic-content" className="sb-transition-fade">
        {children}
        
        <Footer layout={"default"} />
      </div>
      {/* dynamic content end */}
    </>
  );
};
export default PagesLayouts;
