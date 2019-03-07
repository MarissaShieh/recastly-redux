import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var videoFetchDataSuccess = ({items}) => {
  return {
    type: 'VIDEOS_FETCH_DATA_SUCCESS',
    videos: items
  };
};


var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    $.get('https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      key: YOUTUBE_API_KEY,
      q: q,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true'
    })
    .done( ({items}) => dispatch(videoFetchDataSuccess(items) ))
    .fail( ({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    })
  };
  //In addition to sending action objects, also send in
  //action function. Function will be read by Thunk (which is
  //inside store). That function should include info to conduct
  //the YouTube API search
}

export default handleVideoSearch;

// $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });