import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/actions'
import { bindActionCreators } from 'redux'
export class MainScreen extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
  render() {
    return (
        <View>
        <Text>User is logged in</Text>
      </View>
    )
  }
}
const mapDispatchProps=(dispatch)=>bindActionCreators({fetchUser},dispatch)

export default connect(null,mapDispatchProps) (MainScreen)