import React, { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./stylesheet";

const CompleteProfile = ({
  modalVisible,
  setModalVisible,
  editProfile,
  user,
}) => {
  console.log(user);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Welcome, {user}</Text>
            <Text style={styles.modalText}>
              Finish setting up your profile, it won't take more than 300
              seconds
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonOpen]}
              onPress={editProfile}
            >
              <Text style={styles.textStyle}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonClose, { marginTop: 10 }]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={(styles.textStyle, { color: "#000000" })}>
                Remind me later
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CompleteProfile;
