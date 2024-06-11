import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/actions'
import { bindActionCreators } from 'redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './main/Feed'

const Tab = createBottomTabNavigator();

export class MainScreen extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
  render() {
    const {currentUser}=this.props;
    return (
        <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
      </Tab.Navigator>
    )
  }
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
})
const mapDispatchProps=(dispatch)=>bindActionCreators({fetchUser},dispatch)

export default connect(mapStateToProps,mapDispatchProps) (MainScreen)