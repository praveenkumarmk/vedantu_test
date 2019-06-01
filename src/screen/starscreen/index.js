import React, { Component } from "react";
import {View,Text} from 'react-native';
import CustomHeader from '../component/CustomHeader';

class StarScreen extends Component {
 

 render() {
   return (
     <View>
      <CustomHeader
        //  onPress={() => this.props.navigation.openDrawer()}
         // onSearchPress={()=>this.onClickOfSearch}
          onOverViewPress={()=>this.props.navigation.navigate('OverView')}
          onRepositoriesPress={()=>this.props.navigation.navigate('Repository')}
          onStarPress={()=>this.props.navigation.navigate('Star')}

        />
       <View style={{alignItems:"center"}}>
       <Text >StarScreen</Text>
      </View>
     </View>
   );
 }
}
export default StarScreen;


