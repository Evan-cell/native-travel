import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { TapGestureHandler,GestureHandlerRootView } from 'react-native-gesture-handler';
import { categoriesData } from '../constants';
const Categories = () => {
  return (
    <View className='space-y-6'>
      <View className='mx-5 flex-row justify-between items-center'>
        <Text style={{fontSize: wp(4)}} className='font-semibold text-neutral-700'>Categories</Text>
        <TouchableOpacity>
            <Text style={{fontSize: wp(4)}}>See all</Text>
        </TouchableOpacity>
      </View>
      <GestureHandlerRootView>
      <ScrollView
      horizontal
      contentContainerStyle={{paddingHorizontal: 15}}
      className='space-x-4'
      showsHorizontalScrollIndicator={false}
      >
        {
            categoriesData.map((cat,index)=>{
                return (
                    <TouchableOpacity key={index} className="flex items-center space-y-2">
                        <Image source={cat.image} className="rounded-3xl" style={{width: wp(20), height: wp(19)}} />
                        <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>{cat.title}</Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
      </GestureHandlerRootView>
    </View>
  )
}

export default Categories