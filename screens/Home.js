import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.conteudo}>
                <Text>Home</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
});
