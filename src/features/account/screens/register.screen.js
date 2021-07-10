import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer.component";
import { Text } from "../../../components/text.component";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setRepeatedPassword(text)}
        />
        {error && (
          <Spacer>
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            color="black"
            disabled={
              email.length > 0 &&
              password.length > 0 &&
              repeatedPassword.length > 0
                ? false
                : true
            }
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
