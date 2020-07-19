import React, {Component} from 'react';
import './Education.css';
class EducationContainer extends Component {
    state = {
        education: this.props.education || []
    };
    render() {
        return (
            <div id="education-link">
                <div className="card border-primary mb-3">
                    <div className="card-header">
                        <h3 id="education">Education
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </h3>
                    </div>
                    <div className="card-body">
                        <span className="card-text education-card">{this
                                .state
                                .education
                                .map(educationLine => (
                                    <p
                                        key={educationLine
                                        .degree
                                        .toString()}>
                                        <span className="edu-degree">{educationLine.degree}</span>
                                        <br/>
                                        <span>{educationLine.university}
                                            ({educationLine.year})</span>
                                    </p>
                                ))}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default EducationContainer;
