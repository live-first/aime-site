import Youtube from 'react-youtube'
import './index.scss'

type YoutubeProp = {
  videoId: string
  title: string
}

export const YoutubeView = (props: YoutubeProp) => {
  const {videoId, title} = props;
  return (
    <div className='youtube-view'>
      <div className='youtube-title'>{title}</div>
      <Youtube videoId={videoId} className='video-area' />
    </div>
  );
}
