import './timeline.css'

export default function NewTimeLine(props) {

    return(
        <div>
            <div className="thunder-timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>Event Title 1</h3>
                        <p>Event description goes here.</p>
                    </div>
                    <div className="timeline-image">
                        <img src="path/to/image1.jpg" alt="Event 1"/>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-image">
                        <img src="path/to/image2.jpg" alt="Event 2"/>
                    </div>
                    <div className="timeline-content">
                        <h3>Event Title 2</h3>
                        <p>Event description goes here.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}