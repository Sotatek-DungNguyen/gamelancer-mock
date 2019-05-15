import {
    Platform,
    StatusBar,
    Dimensions,
    StyleSheet
} from 'react-native';


const { width, height } = Dimensions.get('screen');

const EditBountyStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    header: {
        width: width,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: '#D5D6D8'
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
    },
    platform: {
        width: width,
        flexDirection: 'column',
        marginTop: 20
    },
    itemPlatform: {
        width: width,
        flexDirection: 'row'
    },
    thumbnail: {
        width: width - 40,
        height: 70,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D0D1D3',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },
    buttonPost: {
        bottom: 0,
        width: width,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#DFDFDF'
    },
    inputTitle: {
        width: width - 40,
        height: 50,
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white'
    },
    title: {
        width: width - 40,
        marginTop: 10,
        flexDirection: 'column'
    },
    itemService: {
        width: width / 2 - 30,
        height: 44,
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        alignItems: 'center'
    },
    priceSession: {
        width: width - 40,
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    price: {
        width: width / 2 - 30,
        flexDirection: 'column',
    },
    inputPrice: {
        width: width / 2 - 30,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        marginTop: 10,
        textAlign: 'right'

    },
    receive: {
        width: width / 2 - 30,
        flexDirection: 'column'
    },
    line: {
        width: width / 2 - 30,
        height: 1,
        backgroundColor: 'black',
        marginBottom: 10,
        marginTop: 10,
    },
    inputCause: {
        width: width - 120,
        height: 50,
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        paddingLeft: 10,
    },
    inputDonate: {
        width: 60,
        height: 50,
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        marginLeft: 20,
        textAlign: 'center'
    },
    textOpacity: {
        color: 'gray',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5
    },
    buttonRemove_Save: {
        width: width / 2 - 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray'
    },
    buttonRemoveSaveContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        flexDirection: 'row'
    },
    modalRemove: {
        width: width,
        height: 200,
        bottom: 0,
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    normalText: {
        fontSize: 14,
        color: 'black'
    },
    largText: {
        fontSize: 18,
        color: 'black'
    },
    textMoney: {
        color: 'black',
        fontSize: 12,
        textAlign: 'right',
        flex: 1
    },
    modalRemoveContainer: {
        flex: 1,
        marginTop: 56,
        backgroundColor: 'rgba(0,0,0,0.6)',
        // alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
});

export default EditBountyStyles;