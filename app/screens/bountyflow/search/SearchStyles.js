import {
    Platform,
    StatusBar,
    Dimensions,
    StyleSheet
} from 'react-native';


const { width, height } = Dimensions.get('screen');

const SearchStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: width,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#01254B'
    },
    body: {
        flex: 1,
        backgroundColor: '#164980'
    },
    inputSearch: {
        flex: 1,
        margin: 6,
        color: 'white',
        backgroundColor: 'rgba(250,250,250 ,0.2)'
    },
    bottom: {
        //  position: 'absolute',
        width: width,
        height: 50,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#164980',
    },
    buttonNext: {
        width: width - 20,
        height: 40,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#164980',
        borderWidth: 2,
        borderColor: 'rgba(24,255,255 ,1)'
    },
    item: {
        height: height / 5,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        // borderWidth: 1,
        // borderColor: 'rgba(24,255,255 ,1)'

    },
    itemSelected: {
        height: height / 5,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderWidth: 2,
        borderColor: 'rgba(24,255,255 ,1)'

    },
    imageGame: {
        width: width / 3 - 19,
        height: height / 5 - 4,
        margin: 1
    },
    titleGame: {
        width: width / 3 - 20,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(236,239,241 ,0.5)',
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    },
    iconSearch: {
        width: 20,
        height: 20,
        position: 'absolute',
        marginLeft: 20
    },
    nextText: {
        color: 'rgba(24,255,255 ,1)'
    }
});

export default SearchStyles;