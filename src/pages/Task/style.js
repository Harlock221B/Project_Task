import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f',
        paddingTop: 20,
    },

    Tasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
    },
    
    deleteTask: {
        justifyContent: 'center',
        padding: 10,
    },

    DescriptionTask: {
        width: '85%',
        alignContent: 'flex-start',
        backgroundColor: '#BBB',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 5,
        color: '#000',
    },

    buttonNewTask: {
        position: 'relative',
        width:60,
        height:60,
        marginVertical: 370,
        bottom: 30,
        left: 5,
        backgroundColor: '#888',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconButton: {
        color: '#ff0',
        fontSize: 20,
        fontWeight: 'bold',
    },

});

export default styles;