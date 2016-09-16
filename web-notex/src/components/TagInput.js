/**
 * Created by hard on 16-9-17.
 */
import React from 'react';
import {WithContext as ReactTags} from 'react-tag-input';

class TagInput extends React.Component {

    noteTags() {
        let {tags} = this.props;
        if (!!tags) {
            return tags.map((val, index)=> {
                return {id: index, text: val};
            })
        }
        return [];
    }


    handleDelete(i) {
        console.log(i);
        let {removeTag} = this.props;
        removeTag(i);
    }

    handleAddition(tag) {
        let {addTag} = this.props;
        addTag(tag);
    }

    render() {
        return <ReactTags
            tags={this.noteTags()}
            placeholder={'添加标签'}
            handleDelete={this.handleDelete.bind(this)}
            handleAddition={this.handleAddition.bind(this)}/>
    }
}

export default TagInput;