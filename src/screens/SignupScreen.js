import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from  'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink 
                text='Already have an account? Sign In'
                routeName='Signin'
            />
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SignupScreen