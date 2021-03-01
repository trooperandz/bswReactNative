import React, { useState } from 'react';
import {
  Linking,
  Platform,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';
import { Icon } from 'react-native-eva-icons';

import SafeAreaView from 'components/SafeAreaView';
import { UsersStackNavProps } from 'navigations/UsersStack/types';
import CloseIcon from 'assets/icon-close.svg';
import { styles } from './styles';
import colors from 'utils/colors';

export const WEBVIEW_MODAL_TEST_ID = 'user-website-webview-modal';

export default (props: UsersStackNavProps<'UserDetailScreen'>) => {
  const { route } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { user } = route.params;
  const address = user.address;
  const isLink = true;

  const handleAddressPress = () => {
    let coordinates = `${user.address.geo.lat},${user.address.geo.lng}`;
    let geoUrl;

    if (Platform.OS === 'android') {
      geoUrl = `geo:${coordinates}`;
    } else {
      geoUrl = `http://maps.apple.com/?ll=${coordinates}`;
    }

    Linking.openURL(geoUrl);
  };

  const handlePhonePress = () => {
    // Remove all dashes, spaces, parantheses, periods etc
    let phone = user.phone.replace(/[- )(.x]/g, '');

    if (Platform.OS === 'android') {
      phone = 'tel:${' + phone + '}';
    } else {
      phone = 'telprompt:${' + phone + '}';
    }

    Linking.openURL(phone);
  };

  const handleToggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <SafeAreaView>
      <>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.heading}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.company}>{user.company.name}</Text>
            </View>

            <Text style={styles.sectionTitle}>Contact Information</Text>
            <View style={styles.separator} />

            <View style={styles.infoWrapper}>
              <Icon name="email" width={18} height={18} fill={colors.primary} />
              <Text style={styles.infoText()}>{user.email}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <Icon name="home" width={18} height={18} fill={colors.primary} />
              <TouchableOpacity onPress={handleAddressPress}>
                <Text style={styles.infoText(isLink)}>{address.street}</Text>
                <Text style={styles.infoText(isLink)}>{address.suite}</Text>
                <Text style={styles.infoText(isLink)}>
                  {address.city}, {address.zipcode}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoWrapper}>
              <Icon name="phone" width={18} height={18} fill={colors.primary} />
              <TouchableOpacity onPress={handlePhonePress}>
                <Text style={styles.infoText(isLink)}>{user.phone}</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
              Other Information
            </Text>
            <View style={styles.separator} />

            <View style={styles.infoWrapper}>
              <Icon
                name="browser"
                width={18}
                height={18}
                fill={colors.primary}
              />
              <TouchableOpacity onPress={handleToggleModal}>
                <Text style={styles.infoText(isLink)}>{user.website}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoWrapper}>
              <Icon
                name="person"
                width={18}
                height={18}
                fill={colors.primary}
              />
              <Text style={styles.infoText()}>{user.username}</Text>
            </View>
          </View>
        </ScrollView>
        <Modal isVisible={isModalVisible}>
          <View style={styles.webViewHeader} testID={WEBVIEW_MODAL_TEST_ID}>
            <TouchableOpacity
              onPress={handleToggleModal}
              style={styles.closeIcon}>
              <CloseIcon width={32} height={32} />
            </TouchableOpacity>
          </View>

          {/* cannot use actual user data here because they are bad links */}
          <WebView source={{ uri: 'https://www.bswhealth.com' }} />
        </Modal>
      </>
    </SafeAreaView>
  );
};
