import React, { Component } from "react";
import { View, Text,FlatList,StyleSheet,ActivityIndicator,Image } from 'react-native';
import CustomHeader from '../component/CustomHeader';
import {getRepositories} from '../component/ApiAction';
import color from '../component/color'
const icon_star = require("../../assets/image/icon_star.png");
const extractKey = ({id}) => id
class RepositoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryData: [],
      refreshing: false,
    }
  }
  renderItem = ({item}) => {
    alert(item+" name"+item.name)
    return (
      <View>
      <Text style={styles.item}>
        {item.name}
      </Text>
      <Image source={icon_star}/>
      </View>
    )
  }
  componentDidMount() {
    this.setState({ refreshing: true });
    getRepositories()
    .then((result) => {
      this.setState({ refreshing: false });
        if (typeof result !== 'undefined' && result.length > 0) {
          this.setState({ repositoryData: result })
        }

      });
  }
  render() {
    return (
      <View>
        <CustomHeader
          //  onPress={() => this.props.navigation.openDrawer()}
          // onSearchPress={()=>this.onClickOfSearch}
          onOverViewPress={() => this.props.navigation.navigate('OverView')}
          onRepositoriesPress={() => this.props.navigation.navigate('Repository')}
          onStarPress={() => this.props.navigation.navigate('Star')}

        />
        <View style={styles.container}>
        <FlatList
          data={this.state.repositoryData}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
        </View>
        {this.state.refreshing && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <ActivityIndicator size="large" color={color.black} />
        </View>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color:color.gray600,
    backgroundColor: 'skyblue',
  },
})
export default RepositoryScreen;


