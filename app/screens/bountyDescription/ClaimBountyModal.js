import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { WhiteSpace, Button, Pagination } from '@ant-design/react-native';
import Modal from 'react-native-modalbox';
import Swiper from 'react-native-swiper';
import TitleBar from '../../components/TitleBar';

let currentModalPage = 0;

export default class ClaimBountyModal extends Component {
    constructor(props) {
        super(props);
        currentModalPage = 0;
    }

    _clickDismissModal = () => {
        const { onClickDismiss } = this.props;
        currentModalPage = 0;
        onClickDismiss();
    }

    _clickNextPage = () => {
        currentModalPage++;
        if (currentModalPage <= 2) {
            this.modalView.scrollBy(currentModalPage, true);
        }
    }

    _renderClaimBountyView() {
        return (
            <View style={utilStyles.viewContainer}>
                <TitleBar
                    leading={
                        <TouchableOpacity
                            onPress={this._clickDismissModal}
                        >
                            <Image
                                style={utilStyles.iconBack}
                                source={require('../../assets/ic_arrow_down.png')}
                            />
                        </TouchableOpacity>
                    }
                    title={
                        <Text style={utilStyles.modalTitle}>Claim Bounty</Text>
                    }
                    trailing={
                        <TouchableOpacity
                            onPress={this._clickNextPage}
                        >
                            <Text style={utilStyles.modalNormalText}>NEXT</Text>
                        </TouchableOpacity>
                    }
                    underline={true}
                    underlineColor='gray'
                />
                <WhiteSpace size='xl' />
                <Pagination
                    mode='pointer'
                    total={3}
                    current={1}
                />
                <WhiteSpace size='xl' />
                <Text style={claimBountyStyle.message}>You may negotiate this terms with the gamelancer once they approve your claim.</Text>
                <WhiteSpace size='xl' />
                <WhiteSpace size='xs' />
                <View
                    style={{ height: StyleSheet.hairlineWidth, backgroundColor: 'gray' }}
                />
                <WhiteSpace size='xl' />
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={claimBountyStyle.bountyInfoTitle}>Session time</Text>
                        <WhiteSpace />
                        <Text style={claimBountyStyle.bountyInfo}>2 hr</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={claimBountyStyle.bountyInfoTitle}>Price</Text>
                        <WhiteSpace />
                        <Text style={claimBountyStyle.bountyInfo}>$32.00/hr</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={claimBountyStyle.bountyInfoTitle}>Date</Text>
                        <WhiteSpace />
                        <Text style={claimBountyStyle.bountyInfo}>Now</Text>
                    </View>
                </View>
            </View>
        );
    }

    _renderClaimBountyAddMessageView() {
        return (
            <View style={[utilStyles.viewContainer, { backgroundColor: this.props.bak }]}>
                <TitleBar
                    leading={
                        <TouchableOpacity
                            onPress={this._clickDismissModal}
                        >
                            <Image
                                style={utilStyles.iconBack}
                                source={require('../../assets/ic_arrow_down.png')}
                            />
                        </TouchableOpacity>
                    }
                    title={
                        <Text style={utilStyles.modalTitle}>Add a message</Text>
                    }
                    trailing={
                        <TouchableOpacity
                            onPress={this._clickNextPage}
                        >
                            <Text style={utilStyles.modalNormalText}>NEXT</Text>
                        </TouchableOpacity>
                    }
                    underline={true}
                    underlineColor='gray'
                />
                <WhiteSpace size='xl' />
                <Pagination
                    mode='pointer'
                    total={3}
                    current={2}
                />
                <WhiteSpace size='xl' />
                <Text style={addMessageStyle.instruction}>Any requests/notes you have you can ask the gamelancer here.</Text>
                <WhiteSpace size='xl' />
                <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
                    <Text style={utilStyles.modalNormalText}>Message</Text>
                    <WhiteSpace />
                    <TextInput
                        style={addMessageStyle.messageForGamelancerInput}
                        multiline
                    />
                </View>
            </View>
        );
    }

    _renderClaimBountySummaryView() {
        const { onClickAddPayment } = this.props;
        return (
            <View style={claimBountyStyle.container}>
                <TitleBar
                    leading={
                        <TouchableOpacity
                            onPress={this._clickDismissModal}
                        >
                            <Image
                                style={utilStyles.iconBack}
                                source={require('../../assets/ic_arrow_down.png')}
                            />
                        </TouchableOpacity>
                    }
                    title={
                        <Text style={utilStyles.modalTitle}>Summary</Text>
                    }
                    underline={true}
                    underlineColor='gray'
                />
                <WhiteSpace size='xl' />
                <Pagination
                    mode='pointer'
                    total={3}
                    current={3}
                />
                <WhiteSpace size='xl' />
                <View style={bountySummaryStyle.container}>
                    <View style={bountySummaryStyle.summaryLineContainer}>
                        <Text style={bountySummaryStyle.text}>Date</Text>
                        <Text style={bountySummaryStyle.text}>Now</Text>
                    </View>
                    <View style={bountySummaryStyle.summaryLineContainer}>
                        <Text style={bountySummaryStyle.text}>Duration</Text>
                        <Text style={bountySummaryStyle.text}>2h</Text>
                    </View>
                    <View style={bountySummaryStyle.summaryLineContainer}>
                        <Text style={bountySummaryStyle.text}>Date</Text>
                        <Text style={bountySummaryStyle.text}>$32/h</Text>
                    </View>
                    <View
                        style={{ height: StyleSheet.hairlineWidth, backgroundColor: 'gray', marginTop: 10, marginBottom: 20 }}
                    />
                    <View style={bountySummaryStyle.summaryLineContainer}>
                        <Button
                            size='small'
                            onPress={onClickAddPayment}
                        >
                            <Text style={[bountySummaryStyle.text, { fontSize: 10 }]}>+ ADD PAYMENT OPTION</Text>
                        </Button>
                        <Text style={bountySummaryStyle.finalPrice}>$64</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Swiper
                    ref={ref => this.modalView = ref}
                    loop={false}
                    showsPagination={false}
                    index={currentModalPage}
                    scrollEnabled={false}
                >
                    {this._renderClaimBountyView()}
                    {this._renderClaimBountyAddMessageView()}
                    {this._renderClaimBountySummaryView()}
                </Swiper>
            </View>
        );
    }
}

const utilStyles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },
    iconBack: {
        height: 25,
        width: 25,
        tintColor: 'black'
    },

    modalTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
    },

    modalNormalText: {
        color: 'black'
    },
});

const claimBountyStyle = StyleSheet.create({
    message: {
        marginHorizontal: 20,
        color: 'black',
        textAlign: 'center',
    },

    bountyInfoTitle: {
        color: 'black',
        fontSize: 12,
    },

    bountyInfo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

const addMessageStyle = StyleSheet.create({
    instruction: {
        marginHorizontal: 20,
        color: 'black',
        textAlign: 'center',
    },

    messageForGamelancerInput: {
        height: 150,
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
    }
});

const bountySummaryStyle = StyleSheet.create({
    container: {
        marginHorizontal: 40,
    },

    summaryLineContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    text: {
        color: 'black',
        fontSize: 13,
    },

    textBold: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 13,
    },

    finalPrice: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
});