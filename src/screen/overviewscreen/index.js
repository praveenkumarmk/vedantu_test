import React, { Component } from "react";
import {View,Text} from 'react-native';
import CustomHeader from '../component/CustomHeader';
import navigation from 'react-navigation'

class OverViewScreen extends Component {
  

 render() {
   return (
     <View>
     <CustomHeader
        //  onPress={() => this.props.navigation.openDrawer()}
         // onSearchPress={()=>this.onClickOfSearch}
          onOverViewPress={()=>this.props.navigation.navigate('OverView')}
          onRepositoriesPress={()=>this.props.navigation.navigate('Repository')}
          onStarPress={()=>this.props.navigation.navigate('Star')}
          isOverViewClicked={true}

        />
       <View style={{alignItems:"center"}}>
       <Text >Over View Screen</Text>
      </View>
     </View>
   );
 }
}

export default OverViewScreen;


