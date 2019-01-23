import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import { changeTalkingto } from '../../../store'

class RoomList extends React.Component {
    componentDidMount() {
        this.props.handleTalking("jenny")
    }
    render() {
        const { matches, matched, handleClick } = this.props;
        return (
            <ul className={style.component}>
                {/* <li> {JSON.stringify(matches)} </li> */}
                { matched.length === 0 ? (
                    <li> You got matched with nobody. YIKES </li>
                ) : (
                    // <li>{ JSON.stringify(matches) }</li>
                    Object.entries(matches).map(name => (
                        <li
                            onClick={e => handleClick(name[0])}
                        > {name[0]} 
                            <col->
                                <span>{name[1][0].message}</span>
                            </col->
                        </li>
                    ))
                )}
            </ul>
        )
    }
}

/** 
 * Looks inside store for messages  
 */
const mapState = state => {
    console.log(state.user.data.matches)
    return {
        matches: state.user.data.matches,
        matched: state.user.data.matched,
        talkingTo: state.user.data.talkingTo
    }
}

const mapDispatch = dispatch => {
    return {
        handleClick(name) {
            dispatch(changeTalkingto(name))
        },
        handleTalking(name) {
            dispatch(changeTalkingto(name))
        }
    }
}

export default connect(mapState, mapDispatch)(RoomList);