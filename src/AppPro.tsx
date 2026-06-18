import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
}
 from 'react-native';

const users = [
  {
    id: '1',
    name: 'Ehiwe Sunday',
    role: 'Senior React Native Developer',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    bio: 'Building cross-platform apps with React Native since 2018. Passionate about clean code and great UX.',
  }
];

function AppPro() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to the React Native App</Text>
                <Text style={styles.title}>name: {users[0].name}</Text>
                <Text style={styles.title}>role: {users[0].role}</Text>
                <Text style={styles.title}>bio: {users[0].bio}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    }
})

export default AppPro;