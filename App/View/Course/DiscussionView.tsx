import React from 'react';
import {View, Text, Image, FlatList, TextInput} from 'react-native';
import style from './style/styleDiscuss';
import Images from '../../Assets/images';
import Icons from '../../Assets/icons';
import {selectedTheme} from '../../Constants/theme';
import { DummyData, Strings } from '../../Constants';

const DiscussionView = () => {
  const RenderSubComments = () => {
    return (
      <FlatList
        data={DummyData.subCommentData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={style.subCommentView}>
              <View style={style.subcmntLeftView}>
                <Image
                  source={Images.stud1}
                  style={style.stud1Style}
                  resizeMode="contain"
                />
              </View>
              <View style={style.subcmntRightView}>
                <View style={style.txtWrapper}>
                  <Text
                    style={[style.txtTitle, {color: selectedTheme.textColor}]}>
                    {item.tile}
                  </Text>
                  <Text style={{color: selectedTheme.textColor7}}>
                    {item.cmnt}
                  </Text>
                </View>
                <View style={style.subCmntStyle}>
                  <View style={style.subcomntWrapper}>
                    <Image
                      source={Icons.reply}
                      style={[
                        style.replyStyle,
                        {tintColor: selectedTheme.textColor7},
                      ]}
                      resizeMode="contain"
                    />
                    <Text
                      style={[
                        style.txtBold,
                        {color: selectedTheme.textColor7},
                      ]}>
                      {Strings.reply}
                    </Text>
                  </View>
                  <View style={style.subheartWrapper}>
                    <Image
                      source={Icons.heart}
                      style={style.commentStyle}
                      resizeMode="contain"
                    />
                    <Text
                      style={[
                        style.txtBold,
                        {color: selectedTheme.textColor7},
                      ]}>
                      {Strings.like}
                    </Text>
                  </View>
                  <View style={style.subdayWrpr}>
                    <Text
                      style={[
                        style.txtBold,
                        {color: selectedTheme.textColor7},
                      ]}>
                      {'5 Days ago'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    );
  };

  return (
    <View
      style={[
        style.parentContainer,
        {backgroundColor: selectedTheme.backgroundColor1},
      ]}>
      <View style={style.contentContainer}>
        <View style={style.leftContainer}>
          <Image source={Images.profile} style={style.profileStyle} />
        </View>
        <View style={style.rightContainer}>
          <View style={style.cmntUprContainer}>
            <View style={style.uprCmntView}>
              <Text style={[style.txtByProg, {color: selectedTheme.textColor}]}>
                {Strings.byprog}
              </Text>
              <Text style={{color: selectedTheme.textColor7}}>
                {Strings.lorem}
              </Text>
            </View>
            <View style={style.lwrCmntView}>
              <View style={style.comntWrapper}>
                <Image
                  source={Icons.comment}
                  style={[
                    style.commentStyle,
                    {tintColor: selectedTheme.textColor7},
                  ]}
                  resizeMode="contain"
                />
                <Text
                  style={[style.txtBold, {color: selectedTheme.textColor7}]}>
                  {'11 comments'}
                </Text>
              </View>
              <View style={style.heartWrapper}>
                <Image
                  source={Icons.heart}
                  style={style.commentStyle}
                  resizeMode="contain"
                />
                <Text
                  style={[style.txtBold, {color: selectedTheme.textColor7}]}>
                  {'11 likes'}
                </Text>
              </View>
              <View style={style.dayWrpr}>
                <Text
                  style={[style.txtBold, {color: selectedTheme.textColor7}]}>
                  {'5 Days ago'}
                </Text>
              </View>
            </View>
          </View>
          <View style={style.subContainer}>
            <RenderSubComments />
          </View>
        </View>
      </View>
      <View style={style.btnContainer}>
        <View style={style.inputWrapper}>
          <TextInput
            placeholder={Strings.typesome}
            placeholderTextColor="black"
            style={style.txtInputStyle}
          />
        </View>
        <View style={style.sendWrapper}>
          <Image
            source={Icons.send}
            style={style.sendIconStyle}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default DiscussionView;
