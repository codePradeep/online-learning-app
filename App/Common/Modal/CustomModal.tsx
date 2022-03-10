import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icons from '../../Assets/icons';
import { DummyData, Strings } from '../../Constants';

import {selectedTheme} from '../../Constants/theme';
import style from './styleCustomModal';

const CustomModal = (newProps: any) => {
  const {
    isVisible,
    setVisible,
    selected,
    setSelected,
    isCheck,
    setCheck,
    isAll,
    setAll,
  } = newProps;

  const RenderType = ():any => {
    return DummyData.ClassTypeData.map((item, index) => {
      return (
        <TouchableOpacity
        key={index}
          onPress={() => setSelected(index)}
          style={selected == index ? style.itemWrapper : style.itemWrapper1}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={selected == index ? style.iconStyle : style.iconStyle1}
          />
          <Text
            style={
              selected == index
                ? [style.txtTitle]
                : [style.txtTitle1, {color: selectedTheme.textColor}]
            }>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const RenderLevel = ():any => {
    return DummyData.ClassLevelData.map((item, index) => {
      return (
        <View 
        key={index}
        style={style.levelItemWrapper}>
          <Text style={[style.txtName, {color: selectedTheme.textColor}]}>
            {item.name}
          </Text>
          <TouchableOpacity
            onPress={() => setCheck(index)}
            style={style.checkWrapper}>
            <Image
              source={isCheck == index ? Icons.checkon : Icons.checkoff}
              resizeMode="contain"
              style={style.checkstyle}
            />
          </TouchableOpacity>
        </View>
      );
    });
  };

  const RenderWithin = () => {
    return (
      <FlatList
        data={DummyData.CreateWithData}
        numColumns={3}
        keyExtractor={(_,i)=>i.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => setAll(index)}
              style={
                isAll == index
                  ? style.WithinItemWrapper
                  : style.WithinItemWrapper1
              }>
              <Text
                style={
                  isAll == index
                    ? [style.txtWithTitle]
                    : null
                }>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <View style={style.parentContainer}>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={style.modalWrapper}>
          <View style={style.uprContainer} />
          <View
            style={[
              style.modal,
              {backgroundColor: selectedTheme.backgroundColor1},
            ]}>
            <View style={style.headerContainer}>
              <View style={style.leftheaderContainer} />
              <View style={style.midheaderContainer}>
                <Text
                  style={[style.txtFilter, {color: selectedTheme.textColor}]}>
                  {Strings.filter}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setVisible(!isVisible)}
                style={style.rightheaderContainer}>
                <Text style={[style.txtCancel,{color:selectedTheme.textColor}]}>{Strings.cancel}</Text>
              </TouchableOpacity>
            </View>
            <View style={style.classTypeView}>
              <Text
                style={[style.txtClassType, {color: selectedTheme.textColor}]}>
                {Strings.classType}
              </Text>
              <View style={style.typeWrapper}>
                <RenderType />
              </View>
            </View>
            <View style={style.classLevelView}>
              <Text
                style={[style.txtClassType, {color: selectedTheme.textColor}]}>
                {Strings.classLevel}
              </Text>
              <View style={style.levelWrapper}>
                <RenderLevel />
              </View>
            </View>
            <View style={style.createWithView}>
              <Text
                style={[style.txtCreated, {color: selectedTheme.textColor}]}>
                {Strings.created}
              </Text>
              <View style={style.withinWrapper}>
                <RenderWithin />
              </View>
            </View>
            <View style={style.btnContainer}>
              <TouchableOpacity
                onPress={() => setVisible(!isVisible)}
                style={style.btnStyleoff}>
                <Text style={style.txtReset}>{Strings.reset}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVisible(!isVisible)}
                style={style.btnStyle}>
                <Text>{Strings.apply}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
