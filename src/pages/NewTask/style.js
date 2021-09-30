import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    label: {
        width: '90%',
        marginLeft: 20,
        marginLeft: 20,
        fontSize: 16,
        color: '#F92E6A',
    },
    input: {
        width: '90%',
        height: 50,
        marginTop: 20,
        fontSize: 16,
        color: '#F92E6A',
    },
    buttonNewTask: {
        position: 'relative',
        width: 100,
        height: 40,
        bottom: 0,
        marginVertical: 470,
        left: 5,
        backgroundColor: '#888',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        color: '#fff',
        fontSize: 16,
        borderBottomEndRadius: 10,
        borderBottomColor: '#000',
    },

});

export default styles;