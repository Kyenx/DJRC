import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class AddNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            content: ''
        }

        
    }

    handleSubmit = (e) => {
        //
        e.preventDefault();

        //Save data
        this.props.handleSave(this.state);

        //Clear data
        this.setState({
            title: '',
            content: ''
        })
    }

    //Check this
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render(){
        return(
            <Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Note</Label>
                        <Input name="content" type="textarea" value={this.state.content} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button color="success">Submit</Button>
                </Form>
            </Fragment>
            
        )
    }
}

export default AddNote