import React, { useEffect, useState } from 'react';
import './StreamSchedule.css';

function StreamSchedule() {
    const schedule = [
        { day: "Monday", time: "12 PM EST" },
        { day: "Tuesday", time: "12 PM EST" },
        { day: "Wednesday", time: "12 PM EST" },
        { day: "Thursday", time: "12 PM EST" },
        { day: "Friday", time: "12 PM EST" }
    ];

    const [videos, setVideos] = useState([]);
    const playlistId = "PL8y1jbbLA86yr76eMlPLQ5j4Ppd_c4wKZ"; // Replace with your actual playlist ID
    const apiKey = 'AIzaSyAwHNe3K4rNimZjqIiHS_Fj4_hHDXAUXzM'; // Replace with your API Key

    useEffect(() => {
      // Fetch first 75 videos from 'That Crypto Gaming Show' the playlist
      fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=75&key=${apiKey}`)
          .then(response => response.json())
          .then(data => {
              const loadedVideos = data.items.map(item => ({
                  id: item.snippet.resourceId.videoId,
                  title: item.snippet.title,
                  thumbnail: item.snippet.thumbnails.default.url,
                  publishedAt: item.snippet.publishedAt // Get the publish date
              }))
              // Sort videos by publishedAt date in descending order and get the first 3
              .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
              .slice(0, 3);

              setVideos(loadedVideos);
          })
          .catch(error => console.log('Fetching videos failed: ', error));
  }, [apiKey, playlistId]);

    return (
        <section id="stream-schedule" className="section-schedule">
            <div className="schedule-container">
                <div className="schedule-header">
                    <span className="schedule-title">Streaming Schedule</span>
                </div>
                <div className="schedule-list">
                    {schedule.map((item, index) => (
                        <div className="schedule-item" key={index}>
                            <span className="day">{item.day}</span>
                            <span className="time">{item.time}</span>
                        </div>
                    ))}
                </div>
                <div className="streaming-platform">
                    {/* <div className="schedule-header">
                        <span className="schedule-title">"That Crypto Gaming Show"</span>
                    </div> */}
                    <div className="video-list">
                {videos.map(video => (
                    <div key={video.id} className="video-item">
                        <iframe 
                            src={`https://www.youtube.com/embed/${video.id}`} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            title={video.title}
                            className="video-iframe"
                        ></iframe>
                        <div className="video-title">{video.title}</div>
                    </div>
                ))}
            </div>
                </div>
            </div>
        </section>
    );
}

export default StreamSchedule;
