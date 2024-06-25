import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/screens/Welcome';
import SelectUser from './components/screens/SelectUser';
import LoginScreen from './components/screens/LoginScreen';
import AdminView from './components/screens/AdminView';
import AdminLogin from './components/screens/AdminLogin';
import Form from './components/screens/Form';
import Homescreen from './components/screens/Homescreen';
import ClassesTable from './components/screens/ClassesTable';
import AdminProfile from './components/screens/AdminProfile';
import Profile from './components/screens/Profile';
import TeacherForm from './components/screens/TeacherForm';
import TeacherLogin from './components/screens/TeacherLogin';
import ForgotPassword from './components/screens/ForgotPassword';
import VerificationCode from './components/screens/VerificationCode';
import CreateNewPassword from './components/screens/CreateNewPassword';
import StudentLeave from './components/screens/StudentLeave';
import StudentComplaint from './components/screens/StudentComplaint';
import Timetable from './components/screens/Timetable';
import TeacherHomeScreen from './components/screens/TeacherHomeScreen';
import TeacherProfile from './components/screens/TeacherProfile';
import Attendence from './components/screens/Attendence';
import FeeNews from './components/screens/FeeNews';
import ClassWork from './components/screens/ClassWork';
import TeacherLeave from './components/screens/TeacherLeave';
import TeacherComplaints from './components/screens/TeacherComplaints';
import TeacherComplaint1 from './components/screens/TeacherComplaint1';
import TeacherHomework from './components/screens/TeacherHomework';
import Attendance from './components/screens/Attendance';
import TeacherTimetable from './components/screens/TeacherTimetable';
import RequestEdit from './components/screens/RequestEdit';
import ReciveComplaint from './components/screens/ReciveComplaint';
import TeacherNotifications from './components/screens/TeacherNotifications';
import AdminStudentHomeScreen from './components/screens/AdminStudentHomeScreen';
import AdminTeacherHomeScreen from './components/screens/AdminTeacherHomeScreen';
import TeacherDetails from './components/screens/TeacherDetails';
import { Title } from 'react-native-paper';
import AdminTeacherComplaints from './components/screens/AdminTeacherComplaints';
import TeacherAnnouncements from './components/screens/TeacherAnnouncements';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="SelectUser" component={SelectUser} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdminView" component={AdminView} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="AdminProfile" component={AdminProfile} options={{ headerShown: false }} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false }} />
        <Stack.Screen name="AdminStudentHomeScreen" component={AdminStudentHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdminTeacherHomeScreen" component={AdminTeacherHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ClassesTable" component={ClassesTable} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} /> 
        <Stack.Screen name="Homescreen" component={Homescreen} options={{ headerShown: false }} />
        <Stack.Screen name="TeacherForm" component={TeacherForm} options={{ headerShown: false }} />
        <Stack.Screen name="TeacherLogin" component={TeacherLogin} options={{ headerShown: false }} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} options={{ headerShown: false }} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />
        <Stack.Screen name="StudentLeave" component={StudentLeave} options={{ title: 'Student Leave' }} />
        <Stack.Screen name="Timetable" component={Timetable} options={{ headerShown: false }} />
        <Stack.Screen name="TeacherHomeScreen" component={TeacherHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TeacherProfile" component={TeacherProfile} options={{ headerShown: false }} />
        <Stack.Screen name="StudentComplaint" component={StudentComplaint} options={{ title: 'Student Complaint' }} />
        <Stack.Screen name="Attendence" component={Attendence} options={{headerShown: false }} />
        <Stack.Screen name="FeeNews" component={FeeNews} options={{headerShown: false}} />
        <Stack.Screen name="ClassWork" component={ClassWork} options={{headerShown: false}} />
        <Stack.Screen name="TeacherLeave" component={TeacherLeave} options={{ title: "Teacher Leave"}} />
        <Stack.Screen name="TeacherComplaints" component={TeacherComplaints} options={{title:"Teacher Complaints"}} />
        <Stack.Screen name="TeacherComplaint1" component={TeacherComplaint1}options={{title: "Teacher Complaint"}} />
        <Stack.Screen name="TeacherHomework" component={TeacherHomework}options={{title: "Homework"}} />
        <Stack.Screen name="Attendance" component={Attendance}options={{title: "Attendance"}} />
        <Stack.Screen name="TeacherTimetable" component={TeacherTimetable} options={{ headerShown: false }} />
        <Stack.Screen name="RequestEdit" component={RequestEdit} options={{headerShown: false}} />
        <Stack.Screen name="ReciveComplaint" component={ReciveComplaint} options={{title:"Student Complaint"}} />
        <Stack.Screen name="TeacherNotifications" component={TeacherNotifications} options={{title :"Notificatios"}} />
        <Stack.Screen name="TeacherDetails" component={TeacherDetails} options={{title: "Teacher Details"}} />
        <Stack.Screen name="AdminTeacherComplaints" component={AdminTeacherComplaints} options={{title: "Teacher Complaints"}} />
        <Stack.Screen name="TeacherAnnouncements" component={TeacherAnnouncements} options={{title:"Teacher Announcements"}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
