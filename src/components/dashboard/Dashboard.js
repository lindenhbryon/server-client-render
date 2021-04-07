import React from 'react';
import { getPosts } from '../../firebase/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getForumPosts } from '../../reducers/posts';
class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        console.log(this.props.getPosts());
    }
    render(){
        return (
            <div>
                <h2>Dashboard</h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPosts: getForumPosts,
}, dispatch)

export default connect(mapStateToProps,  mapDispatchToProps)( Dashboard );
