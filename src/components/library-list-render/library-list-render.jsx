import React, { Fragment } from 'react';

import { LabelTrashList } from '../library-trash/library-trash-list';
import { LabelStarList } from '../library-star/library-star';

export class LabelRenderList extends React.Component {

    render() {
        return (
            <>
            {  this.props.isTrash 
                ?   ( this.props.contetList.map( (contet, index) =>
                        <Fragment key={contet.text+" "+index}> 
                            <LabelTrashList 
                                key={index} 
                                text={contet.text}/>
                        </Fragment>
                    ) )
                :  ( this.props.contetList.map( (content, index) =>
                        <Fragment key={content.text+" "+index}>
                            <LabelStarList 
                                text={content.text} 
                                index={index} 
                                date={content.date} 
                                userName={content.userName}
                                votes={content.votes}
                            />
                        </Fragment>
                    ) )
            } 
            </>
        );
    }

}