import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Ternary extends Component {
    static propTypes = {
        condition: PropTypes.bool.isRequired,
        children: PropTypes.any
    }

    isFunction(fun) {
        return typeof fun === 'function'
    }

    componentWillMount() {
        if (!Array.isArray(this.props.children) || this.props.children.length !== 2) {
            throw new Error('Invalid usage of Ternary component. It should have two childrens')
        }
    }

    render() {
        return this.props.condition ?
            this.isFunction(this.props.children[0]) ? this.props.children[0]() : this.props.children[0] :
            this.isFunction(this.props.children[1]) ? this.props.children[1]() : this.props.children[1]
    }
}

export default Ternary
