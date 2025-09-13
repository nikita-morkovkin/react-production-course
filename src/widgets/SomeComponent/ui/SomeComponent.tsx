import animeImage from '../../../../public/taiga.jpg';
import {FC} from "react";
import './SomeComponent.scss';

export type Size = 'small' | 'medium' | 'large' | 'huge';

export interface SomeComponentProps {
  size: Size;
}

const SomeComponent: FC<SomeComponentProps> = (props) => {
  const {children, size = 'small'} = props;

  return (
    <div
      className={`
      some-component
      ${size === 'small' && 'some-component--small'}
      ${size === 'medium' && 'some-component--medium'}
      ${size === 'large' && 'some-component--large'}
      ${size === 'huge' && 'some-component--huge'}`}
    >
      <img
        src={animeImage}
        alt="Anime"
      />
      {children}
    </div>
  );
};

export default SomeComponent;