import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from "../../modal/ContentInputModal";

import styles from './Messages.style';

import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";
import parseContentData from "../../utils/parseContentData";
import MessageCard from "../../components/MessageCard/MessageCard";

const Messages = () => {
    const [inputModelVisible, setInputModelVisible] = useState(false)
    const [contentList, setContentList] = useState([])

    useEffect(() => {
        database()
            .ref('messages/')
            .on('value', snapshot => {
                const ContentData = snapshot.val();
                const parsedData = parseContentData(ContentData || {});
                setContentList(parsedData);
            })
    }, [])

    function handleInputToggle() {
        setInputModelVisible(!inputModelVisible);
    }
    function handleSendContent(content) {
        handleInputToggle();
        sendContent(content);
    }

    function sendContent(content) {
        const userMail = auth().currentUser.email;

        const ContentObj = {
            text: content,
            username: userMail.split('@')[0],
            date: (new Date()).toISOString(),
            dislike: 0,
        };
        database().ref('messages/').push(ContentObj);
    }
    function handleBanane(item) {
        database().ref(`messages/${item.id}/`)
        .update({dislike: item.dislike + 1})
    }
    const renderContent = ({ item }) =>
        <MessageCard message={item}
            onBanane={() => handleBanane(item)} />
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={contentList}
                renderItem={renderContent} />
            <FloatingButton icon="plus" onPress={handleInputToggle} />
            <ContentInputModal
                visible={inputModelVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent} />
        </SafeAreaView>
    )
}

export default Messages;