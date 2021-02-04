import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import GlobalStyles from '../../Style/GlobalStyles';
import FilledStar from '../../assets/svg/FilledStar';
import Empty_Star from '../../assets/svg/Empty_Star';
import ShareRating from '../../assets/svg/ShareRating';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default function chefReplyScreen({navigation, route}) {
  const data = [
    {
      ratingName: 'Services',
      rating: 4.5,
    },
    {
      ratingName: 'Food',
      rating: 3.5,
    },
    {
      ratingName: 'Personality',
      rating: 2.5,
    },
    {
      ratingName: 'Presentation',
      rating: 0.5,
    },
    {
      ratingName: 'Rating Average',
      rating: 3.5,
    },
  ];

  const [refresh, setRefresh] = useState(false);
  const [review, setReview] = useState([
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    },
    {
      name: 'jenish',
      image:
        'https://images.unsplash.com/photo-1611785776250-1b910ee2ab8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      reviewText: 'I wanted to share how I like eating my burgers.',
      numberOfLikes: 10,
      like: true,
      reviewTime: 'now',
    }
  ]);

  const ChefProfileHeader = () => {
    return (
      <View
        style={
          Platform.OS == 'android'
            ? {
                backgroundColor: '#d9d9d9',
                flexDirection: 'row',
                paddingTop: RFValue(50),
                paddingBottom: RFValue(5),
                marginHorizontal: RFValue(1),
              }
            : {
                backgroundColor: '#d9d9d9',
                flexDirection: 'row',
                paddingTop: RFValue(40),
                paddingBottom: RFValue(5),
                marginHorizontal: RFValue(1),
                borderBottomWidth: 1,
                borderColor: '#464040',
              }
        }>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: RFValue(10),
          }}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: RFValue(5),
            }}>
            <Text
              style={{
                fontFamily: GlobalStyles.font.fontFamilyBold,
                color: '#464040',
                fontSize: RFValue(18),
                fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
              }}>
              Rates & Reviews
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const Rating = (props) => {
    const rating = Math.floor(props.rating);
    return (
      <View>
        {rating == 5 ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
          </View>
        ) : rating == 4 ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
          </View>
        ) : rating == 3 ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
          </View>
        ) : rating == 2 ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
          </View>
        ) : rating == 1 ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: RFValue(3)}}>
              <FilledStar />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
          </View>
        ) : rating == 0 ? (
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
            <View style={{marginHorizontal: RFValue(3)}}>
              <Empty_Star />
            </View>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <>
      <ChefProfileHeader />
      <View style={{flex: 1, padding: 16, flexDirection: 'column'}}>
          <Text
            style={{
              fontFamily: GlobalStyles.font.fontFamilyBold,
              fontSize: RFValue(14),
              fontWeight: Platform.OS == 'android' ? 'bold' : 'bold',
              marginBottom: RFValue(10),
            }}>
            Ratings and Reviews left for you.
          </Text>
          <FlatList
            data={data}
            style={{ height: hp(25) }}
            scrollEnabled={false}
            renderItem={({item, index}) => (
              <View style={{marginVertical: RFValue(5), flexDirection: 'row'}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontFamily: GlobalStyles.font.fontFamilyBold,
                      fontSize: RFValue(12),
                      fontWeight: 'bold'
                    }}>
                    {item.ratingName}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Rating rating={item.rating} />
                  <Text
                    style={{
                      fontFamily: GlobalStyles.font.fontFamilyBold,
                      fontSize: RFValue(12),
                      marginLeft: RFValue(10),
                      fontWeight: 'bold'
                    }}>
                    {item.rating}
                  </Text>
                </View>
              </View>
            )}
          />
          <FlatList
            data={review}
            extraData={refresh}
            renderItem={({item, index}) => (
              <ScrollView style={{marginTop: RFValue(10)}}>
                <View
                  style={{marginVertical: RFValue(5), flexDirection: 'row'}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: RFValue(10), fontWeight: 'bold'}}>
                      {item.name}
                    </Text>
                    <Image
                      resizeMode={'cover'}
                      source={{
                        uri: item.image,
                      }}
                      style={{
                        height: hp(5),
                        width: hp(5),
                        borderRadius: hp(3),
                        marginTop: RFValue(5),
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: RFValue(10),
                      alignSelf: 'center',
                      flex: 1,
                    }}>
                    <Text style={{fontSize: RFValue(12)}}>
                      {item.reviewText}
                    </Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Text style={{color: '#707070', fontSize: RFValue(10)}}>
                      {item.reviewTime}
                    </Text>
                    <View style={{marginTop: RFValue(10)}}>
                      <ShareRating />
                    </View>
                    <View
                      style={{
                        marginTop: RFValue(10),
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#707070',
                          fontSize: RFValue(10),
                          marginRight: RFValue(5),
                        }}>
                        {item.numberOfLikes} likes
                      </Text>
                      {review[index].like ? (
                        <TouchableOpacity
                          onPress={() => {
                            review[index].like = !review[index].like;
                            setReview(review);
                            setRefresh(!refresh);
                            console.log(review[index].like);
                          }}>
                          <Image
                            resizeMode={'cover'}
                            source={require('../../assets/images/filledHeart.png')}
                            style={{
                              height: hp(2.2),
                              width: hp(2.2),
                              tintColor: 'red',
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            review[index].like = !review[index].like;
                            setReview(review);
                            setRefresh(!refresh);
                            console.log(review[index].like);
                          }}>
                          <Image
                            resizeMode={'cover'}
                            source={require('../../assets/images/emptyHeart.png')}
                            style={{
                              height: hp(2.2),
                              width: hp(2.2),
                              tintColor: 'red',
                            }}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
          />
      </View>
    </>
  );
}

