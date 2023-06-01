import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
        <Text>A Rússia é pior que a Bielórússia</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3496eb',
        alignItems: 'center',
        justifyContent:'center',

    }, 
});
