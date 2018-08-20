import React, { Component, Fragment } from "react";
import { Button, Container, Row, Col } from 'reactstrap';
import Notes from './Notes';
import AddNote from './AddNote';
import { fetchNote, fetchNotes, updateNote, addNote } from '../api';

const testnotes = [
    {
        'id':1,
        'title': 'Test node 1',
        'content': 'Content test 1',
    },
    {
        'id':2,
        'title': 'Test node 2',
        'content': 'Content test 2',
    },
    {
        'id':3,
        'title': 'Test node 3',
        'content': 'Content test 3',
    },

];

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            notes: [],
            current_note_id: 0,
            is_creating: false,
            is_fetching: true
        }
        this.handleItemClick = this.handleItemClick.bind(this)
        this.handleAddNote = this.handleAddNote.bind(this)
        this.getData = this.getData.bind(this)
        this.handleSaveNote = this.handleSaveNote.bind(this)
    }

    componentDidMount(){
        this.getData()
        
    }

    async getData(){
        let data = await fetchNotes();
        this.setState({
            notes: data,
            is_fetching: false
        })
        console.log("Note", data)
    }

    handleItemClick(id) {
        this.setState({
            is_creating: false,
            current_note_id: id
        })
    }

    handleAddNote() {
        this.setState({
            is_creating: true
        })
    }

    async handleSaveNote(data) {
        await addNote(data)
        await this.getData();
    }

  render(){
    return(
      <Fragment>
        <Container>
            <Row>
                <Col xs="10">
                    <h2>Regis Realtime Notes</h2>
                </Col>
                <Col xs="2">
                    <Button color="primary" onClick={this.handleAddNote}>Create Notes</Button>
                </Col>
            </Row>

            <Row>
                <Col xs="4">
                    <Notes notes={this.state.notes} handleItemClick={(id) => this.handleItemClick(id)} />
                </Col>
                <Col xs="8">
                    <p>Details</p>
                    { this.state.is_creating ? <AddNote handleSave={this.handleSaveNote} /> : `Editing Note ${this.state.current_note_id}`}
                </Col>
            </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;