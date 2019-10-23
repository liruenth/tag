import React, { Component } from 'react';
import Post from '../components/post';
import { Field, reduxForm } from 'redux-form';
import renderField from '../components/FormInputs/renderField';
const ReactTags = require('react-tag-autocomplete');

//fields come from formElements.js in crystal-dashbaord

class NewStepForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: '',
            description: '',
            image: '',
            music: '',
            endStep: false,
            tags: {
                gainKeys: [],
                requiredKeys: [],
                fromSteps: [],
                toSteps: [],
            },
            suggestions: {
                keys: [
                    {id:5, name: 'key1'}, 
                    {id:6, name: 'key2'}, 
                    {id:7, name: 'key3'}, 
                    {id:8, name: 'key4'}
                ],
                fromSteps: [
                    {id:15, name: 'step1'}, 
                    {id:16, name: 'step2'}, 
                    {id:17, name: 'step3'}, 
                    {id:18, name: 'step4'}
                ],
                toSteps: [
                    {id:15, name: 'step1'}, 
                    {id:16, name: 'step2'}, 
                    {id:17, name: 'step3'}, 
                    {id:18, name: 'step4'}
                ],
            }
        }
    }

    addStep = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    handleDelete(i, tagType, suggestionType) {
        let tags = this.state.tags;
        tags[tagType] = tags[tagType].slice(0);
        let suggestion = tags[tagType].splice(i, 1);
        this.setState({ tags });
        let suggestions = this.state.suggestions;
        suggestions[suggestionType] = [].concat(suggestions[suggestionType], suggestion);
        this.setState({ suggestions });
    }

    handleAddition(tag, tagType, suggestionType) {
        let i = this.state.suggestions[suggestionType].indexOf(tag);
        if (i >= 0) {
            let suggestions = this.state.suggestions
            suggestions[suggestionType] = suggestions[suggestionType].slice(0);
            suggestions[suggestionType].splice(i, 1);
            this.setState({suggestions});
        }
        const tags = this.state.tags;
        tags[tagType] = [].concat(tags[tagType], tag);
        this.setState({ tags });
    }

    componentWillMount() {
        //get list of key items
        //get list of steps
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        let {defaultSwitch} = this.state;

        return (
            <div className="NewStepForm">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-md-3">Title</label>
                        <div className="col-md-9">
                            <Field
                            name="title"
                            type="text"
                            placeholder="Step Title"
                            onChange={this.handleInputChange}
                            component={renderField} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-3">Subtitle</label>
                        <div className="col-md-9">
                            <Field
                            name="subtitle"
                            type="text"
                            placeholder="Step Subtitle"
                            onChange={this.handleInputChange}
                            component={renderField} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-3">Description</label>
                        <div className="col-md-9">
                            <textarea 
                            name='description'
                            onChange={this.handleInputChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-md-3">Image</label>
                        <div className="col-md-9">
                            <Field
                            name="image"
                            type="text"
                            placeholder="Image URL"
                            component={renderField}
                            onChange={this.handleInputChange}
                            helpText="Overwrites default game image for this step" />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label className="control-label col-md-3">Music</label>
                        <div className="col-md-9">
                            <Field
                            name="music"
                            type="text"
                            placeholder="Music URL"
                            component={renderField}
                            onChange={this.handleInputChange}
                            helpText="Overwrites default game music for this step" />
                        </div>
                    </div>
                    
                    <ReactTags
                        tags={this.state.tags.fromSteps}
                        suggestions={this.state.suggestions.fromSteps}
                        handleDelete={(i) => this.handleDelete(i, 'fromSteps', 'fromSteps')}
                        handleAddition={(tag) => this.handleAddition(tag, 'fromSteps', 'fromSteps')} 
                        placeholder="come from step"/>
                    
                    <ReactTags
                        tags={this.state.tags.toSteps}
                        suggestions={this.state.suggestions.toSteps}
                        handleDelete={(i) => this.handleDelete(i, 'toSteps', 'toSteps')}
                        handleAddition={(tag) => this.handleAddition(tag, 'toSteps', 'toSteps')} 
                        placeholder="leads to step"/>
                    
                    <ReactTags
                        tags={this.state.tags.requiredKeys}
                        suggestions={this.state.suggestions.keys}
                        handleDelete={(i) => this.handleDelete(i, 'requiredKeys', 'keys')}
                        handleAddition={(tag) => this.handleAddition(tag, 'requiredKeys', 'keys')} 
                        placeholder="requires key"/>
                    
                    <ReactTags
                        tags={this.state.tags.gainKeys}
                        suggestions={this.state.suggestions.keys}
                        handleDelete={(i) => this.handleDelete(i, 'gainKeys', 'keys')}
                        handleAddition={(tag) => this.handleAddition(tag, 'gainKeys', 'keys')} 
                        placeholder="gives key"/>


                    <div className="form-group">
                        <div className="col-md-9 checkbox-group">
                            <Field
                                name="endStep"
                                type="checkbox"
                                label="Terminating Step?"
                                onChange={this.handleInputChange}
                                component={renderField} />
                        </div>
                    </div>

                    <button type='submit' onClick={(e) => this.addStep(e)}>Add Step</button>
                </form>
            </div>
        );
    }
}

export default (reduxForm({
    form: 'NewStepForm',
}) (NewStepForm));