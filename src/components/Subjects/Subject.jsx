import React from 'react'
import './Subject.css'
import syllabus from '../../media/syllabus.png'
import subject from '../../media/subjects.png'
import topics from '../../media/imp-topics.png'
import Syllabusicon from '../../media/syllabus-icon.png'
import Subjecticon from '../../media/subject-wise-icon.png'
import topicicon  from '../../media/imptopic-icon.png'

const Subject = () => {
    return (
        <div className='programs Subject'>
            
            <div className="program">
                <img src={syllabus} alt="" />
                <div className="caption">
                    <img src={Syllabusicon} alt="" />
                    <p>Syllabus</p>
                </div>
            </div>


            <div className="program">
                <img src={subject} alt="" />
                <div className="caption">
                <img src={Subjecticon} alt="" />
                <p>Subject Weightage</p>
            </div>
            </div>


            <div className="program">
                <img src={topics} alt="" />
                <div className="caption">
                <img src={topicicon} alt="" />
                <p>Imprtant Topics</p>
            </div>
            </div>

        </div>
    )
}

export default Subject
