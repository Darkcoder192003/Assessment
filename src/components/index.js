import React from 'react'
import {Pressable, Dimensions, View, ActivityIndicator,Text, TouchableOpacity,StyleSheet} from 'react-native';



const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
import styled from 'styled-components';

const ChildContainer = styled.View`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  flex-wrap: ${({flexWrap}) => flexWrap};
`;

const Row = ({
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children,
  style,
  flexWrap = 'nowrap',
}) => {
  return (
    <ChildContainer 
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      flexDirection={'row'}
      style={style}>
      {children}
    </ChildContainer>
  ); 
};

const Space = styled.View`
  width: 1px;
  margin-top: ${({top = 0}) => top}px;
  margin-right: ${({right = 0}) => right}px;
  margin-bottom: ${({bottom = 0}) => bottom}px;
  margin-left: ${({left = 0}) => left}px;
`;
const Spacer = ({top, left, bottom, right}) => {
    return <Space top={top} left={left} right={right} bottom={bottom} />;
  };

  const StyleText = styled.Text`
  color: ${({color = '#4C5863'}) => color};
  font-size: ${({fontSize = 16}) => fontSize}px; 
`;

  const CustomText = ({fontSize, text, color}) => {
    return (
      <StyleText fontSize={fontSize} color={color}>
        {text}
      </StyleText>
    );
  };

const Input = styled.TextInput`
  width: ${({width = 250}) => width}px;
  height: ${({height = 50}) => height}px;
  color: blue;
  padding: ${({paddingTop = 0}) => paddingTop}px
    ${({paddingRight = 10}) => paddingRight}px
    ${({paddingBottom = 0}) => paddingBottom}px
    ${({paddingLeft = 10}) => paddingLeft}px;

  margin: ${({marginTopBottom = 10}) => marginTopBottom}px
    ${({marginLeftRight = 0}) => marginLeftRight}px;

  font-size: 16px;
  border: 2px solid #00c1a3;
  border-radius: 6px;
  background-color: #fff;
`;
const AuthInputField = ({
    onChangeText,
    value,
    type,
    style,
    placeholder,
    marginTopBottom,
    marginLeftRight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width,
    height,
    color,
    secureTextEntry,
    placeholderTextColor = "black",
  }) => {
    return (
      <Input
        style={style}
        width={width}
        height={height}
        color={color}
        type={type}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        marginTopBottom={marginTopBottom}
        marginLeftRight={marginLeftRight}
        paddingBottom={paddingBottom}
        paddingRight={paddingRight}
        paddingLeft={paddingLeft}
        paddingTop={paddingTop}
        secureTextEntry={secureTextEntry}
      />
    );
  };

  const SubmitButton = ({text,handleSubmit})=>{
    return(
     <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
     <Text style={styles.submitText}>
       {text}
     </Text>
     </TouchableOpacity>
    )
  }

  const Layout = {
    Spacer,
    CustomText,
    DeviceHeight,
    DeviceWidth,
    AuthInputField,
    SubmitButton
  };

export default Layout

const styles = StyleSheet.create(
  {
    submitBtn : {
      height : 55,
      width : '80%',
      borderColor:"#007260",
      borderWidth:2,
      backgroundColor: "#FFF",
      color : '#fff',
      borderRadius: 30,
      flex :1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 25
    },
    submitText : {
      fontSize : 22,
      color : '#39B68D',
    }
  }
)

