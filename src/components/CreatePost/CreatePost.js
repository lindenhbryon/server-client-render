import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewPost } from '../../firebase/post';
import ErrorMessage from '../global/ErrorMessage';
import { createPostSuccess, createPostMessage } from '../../reducers/posts';
import { clearCreatePostProps } from '../../actions/actionCreator';
class CreatePost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: ''
        };
    }
    componentWillUnmount(){
        this.props.clearProps(this.state);
    }
    handleInputChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
       this.props.createPost(this.state);
    }
    render(){
        console.log("createpostprops", this.props);
        const { success, message } = this.props;
        return(
            <div className="create-post-content">
                <h2>Create Post</h2>
                <ErrorMessage error={success} message={message}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" onChange={this.handleInputChange} className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea className="form-control" onChange={this.handleInputChange} name="content"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Create Post</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    success: createPostSuccess(state.Post),
    message: createPostMessage(state.Post)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    createPost: createNewPost,
    clearProps: clearCreatePostProps
}, dispatch)

export default connect(mapStateToProps,  mapDispatchToProps)( CreatePost );
