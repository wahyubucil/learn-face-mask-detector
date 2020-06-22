import React from "react";
import useModel from "./useModel";
import ObjectDetectionVideo from "./object-detection-video/ObjectDetectionVideo";

const App = () => {
  const model = useModel(process.env.PUBLIC_URL + "/model");

  if (!model) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="fillPage">
      <ObjectDetectionVideo
        model={model}
        // aspectFill: The option to scale the video to fill the size of the view.
        //             Some portion of the video may be clipped to fill the view's
        //             bounds.
        // aspectFit:  The option to scale the video to fit the size of the view
        //             by maintaining the aspect ratio. Any remaining area of the
        //             view's bounds is transparent.
        fit="aspectFill"
        // mirrored:   mirror the video about its vertical axis.
        mirrored
      />
    </div>
  );
};

export default App;
