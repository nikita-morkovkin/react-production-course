import './PageLoader.scss';
import {Loader} from "shared/ui/Loader";

const PageLoader = () => {
  return (
    <div className={'page-loader'}>
      <Loader />
    </div>
  );
};

export default PageLoader;