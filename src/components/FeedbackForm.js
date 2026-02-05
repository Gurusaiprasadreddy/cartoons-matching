import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

// HOC to provide navigate function to class component
function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class FeedbackForm extends Component {
    constructor(props) {
        super(props);

        // Initialize state in constructor
        this.state = {
            childName: '',
            age: '',
            learning: '', // 'Focus', 'Memory', 'Both'
            easyToUse: '', // 'Yes', 'No'
            likedFeatures: {
                visuals: false,
                cards: false,
                celebrations: false
            },
            additionalFeedback: ''
        };

        // Bind methods to this
        this.handleFeatureChange = this.handleFeatureChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFeatureChange(feature) {
        this.setState(prevState => ({
            likedFeatures: {
                ...prevState.likedFeatures,
                [feature]: !prevState.likedFeatures[feature]
            }
        }));
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.childName.trim() || !this.state.age.trim()) {
            alert("Please enter the child's Name and Age to submit.");
            return;
        }

        console.log({
            childName: this.state.childName,
            age: this.state.age,
            learning: this.state.learning,
            easyToUse: this.state.easyToUse,
            likedFeatures: this.state.likedFeatures,
            additionalFeedback: this.state.additionalFeedback
        });
        alert("Thank you for your valuable feedback!");
        this.props.navigate('/');
    }

    render() {
        return (
            <div className="landing-screen">
                {/* White Card Container */}
                <div className="feedback-card">
                    <h1 className="feedback-title">CHILD<br />FEEDBACK</h1>

                    <form onSubmit={this.handleSubmit} className="feedback-form">

                        {/* Child Name */}
                        <div className="form-group-styled">
                            <label>Child Name</label>
                            <input
                                type="text"
                                placeholder="Enter child's name"
                                value={this.state.childName}
                                onChange={(e) => this.setState({ childName: e.target.value })}
                            />
                        </div>

                        {/* Age */}
                        <div className="form-group-styled">
                            <label>Age</label>
                            <input
                                type="number"
                                placeholder="Enter age"
                                value={this.state.age}
                                onChange={(e) => this.setState({ age: e.target.value })}
                            />
                        </div>

                        {/* What did the child learn? */}
                        <div className="form-group-styled">
                            <label>What did the child learn?</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="learning"
                                        value="Focus"
                                        checked={this.state.learning === 'Focus'}
                                        onChange={(e) => this.setState({ learning: e.target.value })}
                                    />
                                    <span>Focus 🎯</span>
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="learning"
                                        value="Memory"
                                        checked={this.state.learning === 'Memory'}
                                        onChange={(e) => this.setState({ learning: e.target.value })}
                                    />
                                    <span>Memory 🧠</span>
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="learning"
                                        value="Both"
                                        checked={this.state.learning === 'Both'}
                                        onChange={(e) => this.setState({ learning: e.target.value })}
                                    />
                                    <span>Both ✨</span>
                                </label>
                            </div>
                        </div>

                        {/* Was the game easy to use? */}
                        <div className="form-group-styled">
                            <label>Was the game easy to use?</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="easyToUse"
                                        value="Yes"
                                        checked={this.state.easyToUse === 'Yes'}
                                        onChange={(e) => this.setState({ easyToUse: e.target.value })}
                                    />
                                    <span>Yes 👍</span>
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="easyToUse"
                                        value="No"
                                        checked={this.state.easyToUse === 'No'}
                                        onChange={(e) => this.setState({ easyToUse: e.target.value })}
                                    />
                                    <span>No 👎</span>
                                </label>
                            </div>
                        </div>

                        {/* What features did the child like? */}
                        <div className="form-group-styled">
                            <label>What features did the child like?</label>
                            <div className="checkbox-group">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={this.state.likedFeatures.visuals}
                                        onChange={() => this.handleFeatureChange('visuals')}
                                    />
                                    <span>Visuals 🎨</span>
                                </label>
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={this.state.likedFeatures.cards}
                                        onChange={() => this.handleFeatureChange('cards')}
                                    />
                                    <span>Cards 🃏</span>
                                </label>
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={this.state.likedFeatures.celebrations}
                                        onChange={() => this.handleFeatureChange('celebrations')}
                                    />
                                    <span>Celebrations 🎉</span>
                                </label>
                            </div>
                        </div>

                        {/* Additional Feedback */}
                        <div className="form-group-styled">
                            <textarea
                                placeholder="Additional Feedback"
                                rows="3"
                                value={this.state.additionalFeedback}
                                onChange={(e) => this.setState({ additionalFeedback: e.target.value })}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="submit-btn-purple">
                            Submit Feedback
                        </button>

                        <button
                            type="button"
                            onClick={() => this.props.navigate(-1)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#777',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                marginTop: '15px',
                                textDecoration: 'underline',
                                width: '100%'
                            }}
                        >
                            Go Back
                        </button>

                    </form>
                </div>
            </div>
        );
    }
}

export default withNavigation(FeedbackForm);
