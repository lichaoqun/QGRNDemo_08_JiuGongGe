/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

import shareData from './shareData.json';
import Dimensions from 'Dimensions';

var ds =new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var screenWidth = Dimensions.get('window').width;

var cols = 3;
var cellWH = 100;

var vMargin = (screenWidth - cellWH * cols) / (cols +1);
var hMargin = 25;

export default class App extends Component<{}> {

  state={
    dataSource:ds.cloneWithRows(shareData.data)
  }

  render() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow.bind(this)}
        contentContainerStyle = {styles.listViewStyle}
      />
    );
  }

  renderRow(rowData, sectionID, rowID, highlightRow){
    return(
        <TouchableOpacity onPress = {()=>this.onPressClick(rowData)}>
          <View style = {styles.cellStyle}>
            <Image source = {{uri:rowData.icon}} style = {styles.iconStyle}/>
            <Text style = {styles.titleStyle}>
              {rowData.title}
            </Text>
          </View>
        </TouchableOpacity>

    );
  }

  onPressClick(rowData){
    console.log(rowData);
  }

}

const styles = StyleSheet.create({

  listViewStyle:{
    flexDirection:'row',
    flexWrap:'wrap',

  },

  cellStyle:{
    marginLeft : vMargin,
    marginTop : hMargin,
    width : cellWH,
    height: cellWH,
    alignItems: 'center',
  },

  iconStyle:{
    width:90,
    height:90,
    borderRadius:10,
    marginBottom:5
  },

  titleStyle:{
  }

});
