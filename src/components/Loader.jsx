import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <div className="loading-pos">
        <ColorRing
          visible={true}
          height="800"
          width="800"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </>
  );
}
