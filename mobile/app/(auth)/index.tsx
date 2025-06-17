import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from '@/assets/styles/login.styles'
import { useState } from 'react'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '@/constants/colors.js'
import { Link } from 'expo-router'
const Index = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleLogin = () =>{

    }

  return (
    <View style={styles.container}>

        {/* illsutration */}
        <View style={styles.topIllustration}>
            <Image 
                source={require("@/assets/images/login_illustration.svg")}
                style={styles.illustrationImage}
                resizeMode='contain'
            />
        </View>
      {/* <Text>Login screen</Text> */}

      <View style={styles.card}>
        <View style={styles.formContainer}>
            
            <View style={styles.inputGroup}></View>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
                <Ionicons 
                    name="mail-outline"
                    size={20}
                    color={COLORS.primary}
                    style={styles.inputIcon}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Enter your email'
                    placeholderTextColor={COLORS.placeholderText}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize='none'
                />
            </View>

            <View style={styles.inputGroup}></View>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
                <Ionicons 
                    name="lock-closed-outline"
                    size={20}
                    color={COLORS.primary}
                    style={styles.inputIcon}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Enter your password'
                    placeholderTextColor={COLORS.placeholderText}
                    value={password}
                    onChangeText={setPassword}
                    keyboardType="default"
                    autoCapitalize='none'
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />

                <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                > 
                    <Ionicons 
                        name={showPassword ? "eye-outline": "eye-off-outline"}
                        size={20}
                        color={COLORS.primary}
                    />
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.button} onPress={handleLogin}
                disabled={isLoading}
            >
                {
                    isLoading ? (
                        <ActivityIndicator color='#fff'/>
                    ): (
                        <Text style={styles.buttonText}>Login</Text>
                    )
                }
                </TouchableOpacity>


                {/* footer */}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don&apos;t have an account</Text>
                    <Link href="/signup" asChild>
                    <TouchableOpacity>
                        <Text style={styles.link}>Sign Up</Text>
                    </TouchableOpacity>
                    </Link>
                </View>

        </View>
      </View>
    </View>
  )
}
export default Index