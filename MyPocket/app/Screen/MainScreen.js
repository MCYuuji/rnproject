import * as React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity,Image,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg from "../Assets/icon/mypocket-logo.svg";


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const MainScreen = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Homepage"
        activeColor="#000000"
        barStyle={{ backgroundColor: 'white' }}
        >
        <Tab.Screen
            name="Homepage"
            component={HomeScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="History"
            component={HistoryPage}
            options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="clipboard-text-clock-outline" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="QRcode"
            component={QRPage}
            options={{
            tabBarLabel: 'QR Code',
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="qrcode" color={color} size={26} />
            )
            }}/>
        <Tab.Screen
            name="Pocket"
            component={PocketPage}
            options={{
            tabBarLabel: 'Pocket',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="ticket-confirmation-outline" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Account"
            component={AccountPage}
            options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            }}
        />
        </Tab.Navigator>
        </NavigationContainer>
    );
}
  
const HomeScreen = () => {
return(
    <HomeStack.Navigator>
    <HomeStack.Screen 
        name="Home"
        component={HomePage}
        options={{headerShown:false}}
        />
    <HomeStack.Screen
        name='TopUp'
        component={TopUpPage}
        options={{
        title:'Top-Up',
        headerStyle:{ backgroundColor:'#FFD700'}
        }}/>
    <HomeStack.Screen
        name='Bank'
        component={BankPage}
        options={{
        title:'Bank Negara',
        headerStyle:{ backgroundColor:'#FFD700'}
        }}/>
    <HomeStack.Screen
        name='BTN'
        component={BTNPage}
        options={{
        title:'BTN',
        headerStyle:{ backgroundColor:'#FFD700'}
        }}/>
    </HomeStack.Navigator>
)
}
const HomePage = ({navigation}) =>{
return(
    <View style={{flex:1
    }}>
    <View style={{marginTop:20, marginLeft:20}}>
        <Svg width={120} height={40} />
    </View>
    <View style={{
        
        marginTop:15,
        marginLeft:20,
        marginRight:20,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'white',
        borderRadius:10
    }}>
        <Text style={{justifyContent:'flex-start', paddingLeft:10,paddingTop:5,paddingBottom:5,fontSize:24,fontWeight:'bold',fontStyle:'italic'}}>Saldo</Text>
        <Text style={{justifyContent:'flex-start',paddingLeft:10,marginBottom:75,fontSize:24,fontWeight:'bold'}}>RP. 200.000</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:18}}>
        <View style={{justifyContent:'space-evenly',flexDirection:'row',width:'100%',marginBottom:18}}>
            <View style={{width:'25%',alignItems:'center'}}>
            <TouchableOpacity 
            style={{width:58,height:58,borderWidth:1,borderColor:'black',borderRadius:18,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}
            onPress={()=>navigation.navigate('TopUp')}
            >
                <Image 
                source={require('../Assets/icon/top-up.png')}
                style={{
                resizeMode:'center',
                width:40,
                height:40
                }}/>
            </TouchableOpacity>
            <Text style={{fontSize:11,fontWeight:'bold',alignItems:'center',marginTop:6}}>TOP-UP</Text>
            </View>
            <View style={{width:'25%',alignItems:'center'}}>
            <View style={{width:58,height:58,borderWidth:1,borderColor:'black',borderRadius:18,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                <Image 
                source={require('../Assets/icon/save-money.png')}
                style={{
                resizeMode:'center',
                width:40,
                height:40
                }}/>
            </View>
            <Text style={{fontSize:11,fontWeight:'bold',alignItems:'center',marginTop:6}}>REQUEST</Text>
            </View>
            <View style={{width:'25%',alignItems:'center'}}>
            <View style={{width:58,height:58,borderWidth:1,borderColor:'black',borderRadius:18,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                <Image 
                source={require('../Assets/icon/give-money.png')}
                style={{
                resizeMode:'center',
                width:40,
                height:40
                }}/>
            </View>
            <Text style={{fontSize:11,fontWeight:'bold',alignItems:'center',marginTop:6}}>SEND</Text>
            </View>
        </View>
        </View>
    </View>
    <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:18}}>
        <View style={{justifyContent:'space-evenly',flexDirection:'row',width:'100%',marginBottom:18}}>
            <View style={{width:'25%',alignItems:'center'}}>
            <View style={{width:58,height:58,borderWidth:1,borderColor:'black',borderRadius:18,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                <Image 
                source={require('../Assets/icon/sim.png')}
                style={{
                resizeMode:'center',
                width:40,
                height:40
                }}/>
            </View>
            <Text style={{fontSize:11,fontWeight:'bold',alignItems:'center',marginTop:6}}>PULSA</Text>
            </View>
            <View style={{width:'25%',alignItems:'center'}}>
            <View style={{width:58,height:58,borderWidth:1,borderColor:'black',borderRadius:18,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                <Image 
                source={require('../Assets/icon/lightning.png')}
                style={{
                resizeMode:'center',
                width:40,
                height:40
                }}/>
            </View>
            <Text style={{fontSize:11,fontWeight:'bold',alignItems:'center',marginTop:6}}>ELITRICITY</Text>
            </View>
            <View style={{width:'25%',alignItems:'center'}}>
            <TouchableOpacity style={{width:58,height:58,borderWidth:1,borderColor:'black',borderRadius:18,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                <Image 
                source={require('../Assets/icon/gift-card.png')}
                style={{
                resizeMode:'center',
                width:40,
                height:40
                }}/>
            </TouchableOpacity>
            <Text style={{fontSize:11,fontWeight:'bold',alignItems:'center',marginTop:6}}>VOUCHER</Text>
            </View>
        </View>
        </View>
    <View style={{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:-1
    }}>
        <View style={{ height: 160, backgroundColor: "#FFD700" }} />
        <View style={{ flex: 1, backgroundColor: "#D9D9D9" }} />
    </View>
    
    
    </View>
)
}

const HistoryPage = () =>{
return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Ini adalah History page</Text>
    </View>
)
}
const QRPage = () =>{
return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Ini adalah QR Page</Text>
    </View>
)
}
const PocketPage = () =>{
return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Ini adalah Pocket Page</Text>
    </View>
)
}
const AccountPage = () =>{
return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Ini adalah Account Page</Text>
    </View>
)
}

const TopUpPage =({navigation}) =>{
return(
    <View style={{flex:1, justifyContent:'flex-start'}}>
    <View style={{justifyContent:'center', alignItems:'center',marginTop:20}}>
        <Text style={{fontWeight:'bold',fontSize:24}}>Saldo MyPocket</Text>
        <Text style={{fontWeight:'bold',fontSize:24}}>Rp 200.000</Text>
    </View>
    <View style={{height:'25%',justifyContent:'center'}}>
        <TouchableOpacity 
        style={{padding:15,borderColor:'#000000',borderWidth:2,marginHorizontal:20,borderRadius:10,backgroundColor:'white',flexDirection:'row'}}
        onPress= {() =>navigation.navigate('Bank')}>
        <Image 
            source={require('../Assets/icon/bank.png')}
            style={{
            resizeMode:'center',
            width:40,
            height:40
            }}/>
        <View>  
            <Text style={{marginLeft:15,marginTop:-5,fontSize:16,fontWeight:'bold'}}>Bank Negara</Text>
            <Text style={{marginLeft:15,fontSize:16}}>Bebas dari biaya admin</Text>
        </View>
        </TouchableOpacity>
    </View>
    <View style={{height:'25%',justifyContent:'center'}}>
        <View style={{padding:15,borderColor:'#000000',borderWidth:2,marginHorizontal:20,borderRadius:10,backgroundColor:'white',flexDirection:'row'}}>
        <Image 
            source={require('../Assets/icon/atm.png')}
            style={{
            resizeMode:'center',
            width:40,
            height:40
            }}/>
        <View>  
            <Text style={{marginLeft:15,marginTop:-5,fontSize:16,fontWeight:'bold'}}>ATM Transfer</Text>
            <Text style={{marginLeft:15,fontSize:16}}>Lewat ATM, M-Banking, atau Internet Banking</Text>
        </View>
        </View>
    </View>
    <View style={{height:'25%',justifyContent:'center'}}>
        <View style={{padding:15,borderColor:'#000000',borderWidth:2,marginHorizontal:20,borderRadius:10,backgroundColor:'white',flexDirection:'row'}}>
        <Image 
            source={require('../Assets/icon/infaq.png')}
            style={{
            resizeMode:'center',
            width:40,
            height:40
            }}/>
        <View>  
            <Text style={{marginLeft:15,marginTop:-5,fontSize:16,fontWeight:'bold'}}>Bank Syariah</Text>
            <Text style={{marginLeft:15,fontSize:16}}>Isi saldo langsung dari bank syariah</Text>
        </View>
        </View>
    </View>
    <View style={{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:-1
    }}>
        <View style={{flex: 1, backgroundColor: "#D9D9D9"}}/>
    </View>
    </View>
)
}
const BankPage =({navigation}) =>{
return(
    <View style={{flex:1}}>
    <View style={{marginTop:10}}>
        <Text style={{marginLeft:10,fontSize:17,fontWeight:'500'}}>-Tanpa biaya admin</Text>
        <Text style={{marginLeft:10,fontSize:17,fontWeight:'500'}}>-Isi minimal Rp10.000</Text>
        <Text style={{marginLeft:10,fontSize:17,fontWeight:'500'}}>-Isi maksimal Rp1.000.000</Text>
    </View>
    <View style={{marginTop:20,height:15,backgroundColor:'grey'}}/>
    <View style={{height:'10%',justifyContent:'center'}}>
        <TouchableOpacity 
        style={{marginTop:10,flexDirection:'row'}}
        onPress={()=> navigation.navigate('BTN')}
        >
        <Image
            source={require('../Assets/icon/BTN.png')}
            style={{
            resizeMode:'center',
            width:45,
            height:45
            }}/>
        <View style={{flex:1,padding:10,marginRight:10,borderColor:'#000000',borderRadius:10,backgroundColor:'white',borderWidth:1}}>
            <Text style={{fontWeight:'500'}}>Bank BTN</Text>
        </View>
        </TouchableOpacity>
    </View>
    <View style={{height:'10%',justifyContent:'center'}}>
        <View style={{marginTop:10,flexDirection:'row'}}>
        <Image
            source={require('../Assets/icon/BNI.png')}
            style={{
            resizeMode:'center',
            width:45,
            height:45
            }}/>
        <View style={{flex:1,padding:10,marginRight:10,borderColor:'#000000',borderRadius:10,backgroundColor:'white',borderWidth:1}}>
            <Text style={{fontWeight:'500'}}>Bank BNI</Text>
        </View>
        </View>
    </View>
    <View style={{height:'10%',justifyContent:'center'}}>
        <View style={{marginTop:10,flexDirection:'row'}}>
        <Image
            source={require('../Assets/icon/Mandiri.png')}
            style={{
            resizeMode:'center',
            width:45,
            height:45
            }}/>
        <View style={{flex:1,padding:10,marginRight:10,borderColor:'#000000',borderRadius:10,backgroundColor:'white',borderWidth:1}}>
            <Text style={{fontWeight:'500'}}>Bank Mandiri</Text>
        </View>
        </View>
    </View>
    <View style={{height:'10%',justifyContent:'center'}}>
        <View style={{marginTop:10,flexDirection:'row'}}>
        <Image
            source={require('../Assets/icon/BRI.png')}
            style={{
            resizeMode:'center',
            width:45,
            height:45
            }}/>
        <View style={{flex:1,padding:10,marginRight:10,borderColor:'#000000',borderRadius:10,backgroundColor:'white',borderWidth:1}}>
            <Text style={{fontWeight:'500'}}>Bank BRI</Text>
        </View>
        </View>
    </View>
    <View style={{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:-1
        }}>
        <View style={{flex: 1, backgroundColor: "#D9D9D9"}}/>
        </View>
    </View>
)
}

const BTNPage  = () => {
return(
    <View style={{flex:1}}>
    <View>
        <ScrollView>
        <View style={{flex:1,padding:10,marginRight:10,borderColor:'#000000',borderRadius:10,backgroundColor:'white',borderWidth:1,marginTop:20}}>
            <Text>ATM</Text>
        </View>
        <Text>1. Masukan Kartu ATM & PIN kamu </Text>
        <Text>2. Pilih menu 'Uang Elektronik' </Text>
        <Text>3. Pilih 'MyPocket' </Text>
        <Text>4. Masukan no. handphone yang terdaftar di MyPocket</Text>
        <Text>5. Masukan nominal top up</Text>
        <Text>6. konfirmasi tranksaksi</Text>
        <Text>7. ikuti petunjuk selanjutnya untuk menyelesaikan proses isi saldo</Text>
        <View style={{flex:1,padding:10,marginRight:10,borderColor:'#000000',borderRadius:10,backgroundColor:'white',borderWidth:1,marginTop:20}}>
            <Text>Mobile Banking</Text>
        </View>
        <Text>1. Login ke Aplikasi BTN Mobile Banking</Text>
        <Text>2. Pilih menu 'Pembelian' </Text>
        <Text>3. Pilih menu 'Top Up MyPocket'</Text>
        <Text>4. Masukan no. handphone yang terdaftar di MyPocket</Text>
        <Text>5. Masukan nominal top up</Text>
        <Text>6. konfirmasi tranksaksi</Text>
        <Text>7. ikuti petunjuk selanjutnya untuk menyelesaikan proses isi saldo</Text>
        <View style={{flex:1,padding:10,marginRight:10,borderColor:'#000000',borderRadius:10,backgroundColor:'white',borderWidth:1,marginTop:20}}>
            <Text>Internet banking</Text>
        </View>
        <Text>1. Login Ke Internet Banking BTN</Text>
        <Text>2. Pilih menu 'Transfer & Pembayaran' </Text>
        <Text>3. Pilih menu 'pembelian'</Text>
        <Text>4. Pilih 'Daftar Baru'</Text>
        <Text>5. Pilih Kategori Institusi 'MyPocket'</Text>
        <Text>6. Masukin Nama Penerima & no. handphone yang terdaftar di MyPocket</Text>
        <Text>7. Masukkan nominal top up</Text>
        <Text>8. Masukin PIN</Text>
        <Text>9. ikuti petunjuk selanjutnya untuk menyelesaikan proses isi saldo</Text>
        </ScrollView>
    </View>
    <View style={{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:-1
        }}>
        <View style={{flex: 1, backgroundColor: "#D9D9D9"}}/>
    </View>
    </View>
)
}
const styles = StyleSheet.create({
container: {
    flex: 1
},
});

export default MainScreen;