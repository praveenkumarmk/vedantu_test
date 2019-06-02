import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import color from '../component/color'
const icon_search = require("../../assets/image/icon_search.png");
const icon_menu = require("../../assets/image/icon_menu.png");
const icon_cat_profile = require("../../assets/image/icon_cat_profile.png");


const CustomHeader = ({ onPress, onSearchPress, onOverViewPress, onRepositoriesPress, onStarPress, isOverViewClicked,
  isRepositoryClicked, isStarClicked }) => {
  return (
    <View style={styles.imageContainer}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end" }}>
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: "center", flex: 1, marginBottom: 5, padding: 10 }} >
          <Image source={icon_menu} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <View style={{ alignItems: "flex-end", justifyContent: 'center', flexDirection: 'row' }} >
          <Image source={icon_cat_profile} />
        </View>
        <TouchableOpacity onPress={onSearchPress} style={{ alignItems: "flex-end", justifyContent: 'center', marginBottom: 5, padding: 10 }} >
          <Image source={icon_search} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>


      </View>
      <View style={{ margin: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end" }}>
        <TouchableOpacity onPress={onOverViewPress}>
          <Text style={{ color: isOverViewClicked ? color.white : color.gray600, fontSize: 20 }} >OverView</Text></TouchableOpacity>
        <TouchableOpacity onPress={onRepositoriesPress}>
          <Text style={{ color: isRepositoryClicked ? color.white : color.gray600, fontSize: 20 }} >Repositories</Text></TouchableOpacity>
        <TouchableOpacity onPress={onStarPress}>
          <Text style={{ color: isStarClicked ? color.white : color.gray600, fontSize: 20 }} >Stars</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  textStyle: {
    color: color.white,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 3,
  },
  imageContainer: {
    width: null,
    height: 120,
    backgroundColor: color.black
  }
};

export default CustomHeader;