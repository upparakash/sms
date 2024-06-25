import React , {useState,useEffect} from "react";
import {Text,View,ScrollView,Image,Button,TouchableOpacity,StyleSheet,Modal} from 'react-native';
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


const AdminTeacherLeave =() => {
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});
    const [teacherLeave, setTeacherLeave] = useState([]);

    useEffect(() =>{
        
    })

}
const style = StyleSheet.create({
    container:{
        flex:1,
    },
});

export default AdminTeacherLeave;