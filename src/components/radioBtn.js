  import React, { useState } from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import { RadioButton } from 'react-native-paper'; 
  
const styles = StyleSheet.create({ 
    radioGroup: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 20, 
        borderRadius: 8, 
        padding: 10, 
    }, 
    radioButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginHorizontal:10
    }, 
    radioLabel: { 
        marginLeft: 8, 
        fontSize: 16, 
        color: '#333', 
    }, 
}); 
  
const RadioBtn = () => { 
    const [selectedValue, setSelectedValue] = useState('option1'); 
  console.log(selectedValue)
    return ( 
        // <View style={styles.container}> 
            <View style={styles.radioGroup}> 
                <View style={styles.radioButton}> 
                    <RadioButton.Android 
                        value="option1"
                        status={selectedValue === 'option1' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('option1')} 
                        color="#007BFF"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Admin
                    </Text> 
                </View> 
  
                <View style={styles.radioButton}> 
                    <RadioButton.Android 
                        value="option2"
                        status={selectedValue === 'option2' ?  
                                 'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('option2')} 
                        color="#007BFF"
                    /> 
                    <Text style={styles.radioLabel}> 
                        User
                    </Text> 
                </View> 
            </View> 
        // </View> 
    ); 
}; 
  
export default RadioBtn;