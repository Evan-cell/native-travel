import { View, Text,SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { TextInput } from 'react-native-gesture-handler';
import { TapGestureHandler,GestureHandlerRootView } from 'react-native-gesture-handler';
import Categories from '../components/Categories';
import SortCategories from '../components/SortCategories';
import Destination from '../components/Destination';
const ios = Platform.OS=='ios';
const topMargin = ios? 'mt-3': 'mt-10';
const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className={"space-y-6 "+topMargin}>
        {/* avatar */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text style={{fontSize: wp(7)}} className="font-bold text-neutral-700">Let's Discover</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{height: wp(12), width: wp(12)}} />
          </TouchableOpacity>
        </View>
        {/* searchbar */}
        <GestureHandlerRootView>
        <TapGestureHandler>
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder='Search destination'
              placeholderTextColor={'gray'}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>
        </TapGestureHandler>
        </GestureHandlerRootView>
        {/* CATEGORIES */}
      <View className='mb-4'>
        <Categories />
      </View>
      <View className='mb-4'>
        <SortCategories />
      </View>
      <View className='mb-4'>
        <Destination />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen