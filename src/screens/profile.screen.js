import React from 'react';
import { Text } from '../components/text.component';
import { View } from 'react-native';
import {Background, Heading, ProfileCard, ProfilePicture, BackgroundIMG, BackgroundIMG2} from "../components/profile.styles";
//import { ProfileInfoCard } from './profile.card';



export default function ProfileScreen(){
    return (
        <Background>
          <BackgroundIMG />
          <BackgroundIMG2 />
          <View style={{marginTop: 10, paddingTop: 120}} />
          <ProfileCard elevation={5}>
            <Heading>
                <ProfilePicture source={require('../../assets/avatar.jpg')}/>
                <Text variant="label">Amber Cubacub</Text>
                <Text variant="caption">19</Text>
                <Text variant="place">Manila</Text>
                <View style={{borderColor: "black", borderBottomWidth: 0.5, marginBottom: 7, top: 125}} />
                <Text variant="followers">80k</Text>
              <Text variant="followers2">Followers</Text>
                <Text variant="likes">80.3k</Text>
                <Text variant="likes2">Likes</Text>
                <Text variant="photos">1.4k</Text>
                <Text variant="photos2">Photos</Text>
            </Heading>
          </ProfileCard>
        </Background>
    );
}