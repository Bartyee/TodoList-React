import React, {Component} from 'react';

class AddTodo extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            id: 1
        }
    }

    handleChange = (e) => {
        this.setState({
            name: e.currentTarget.value.charAt(0).toUpperCase() + e.currentTarget.value.slice(1)
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.addTodo(this.state);

        this.setState({
            id: this.state.id+1,
            name: ''
        })
    }

    render(){
        return(
            <div className="addTodo-form">
            <div class="row">
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <textarea onChange={this.handleChange} id="textarea1" value={this.state.name} class="materialize-textarea"></textarea>
                        <button onClick={this.handleSubmit} class="btn waves-effect waves-light" type="submit" name="action">Add
                            <i class="material-icons right">send</i>
                        </button>
                        <label for="textarea1">Textarea</label>
                        </div>
                    </div>
                    
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTodo;