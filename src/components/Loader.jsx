import { ColorRing } from 'react-loader-spinner';
import { Component } from 'react';

export default class Loader extends Component {
  render() {
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
}
