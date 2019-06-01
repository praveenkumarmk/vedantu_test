import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import CustomHeader from '../component/CustomHeader';
import { getRepositories } from '../component/ApiAction';
import color from '../component/color'
const icon_star = require("../../assets/image/icon_star.png");
const extractKey = ({ id }) => id
class RepositoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryData: [],
      refreshing: false,
    }
  }
  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={{ color: color.primaryColour,fontSize:20,margin:5 }}>
          {item.full_name}
        </Text>
        <Text style={{ color: color.gray600,margin:5 }}>
          {item.description}
        </Text>
        <View style={{flexDirection:"row",margin:5}}>
        <Image source={icon_star} style={{marginRight:5}}/>
        <Text style={{ color: color.gray600 ,marginRight:5}}>
          {item.forks_count}
        </Text>
        <View style={styles.CircleShapeView}></View>
        <Text style={{ color: color.gray600,marginRight:5 }}>
          {item.language}
        </Text>
        </View>
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


      <View style={styles.container}>
        <CustomHeader
          onOverViewPress={() => this.props.navigation.navigate('OverView')}
          onRepositoriesPress={() => this.props.navigation.navigate('Repository')}
          onStarPress={() => this.props.navigation.navigate('Star')}

        />
        <FlatList
          data={this.state.repositoryData}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
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
  CircleShapeView: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    backgroundColor: color.yellow500,
    marginRight:5
},
  item: {
    padding: 3,
    color: color.gray600,
    borderWidth: 1/2,
    height:120,
    borderColor: color.lightgray

  },
})
export default RepositoryScreen;


