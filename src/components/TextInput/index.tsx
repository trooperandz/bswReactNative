import React, { forwardRef, Ref } from 'react';
import { TextInput as Input, View } from 'react-native';

import * as S from './styles';

type Props = {
  onChangeText: (text: string) => void;
  hasError: string | undefined;
};

export const TextInput = forwardRef((props: Props, ref: Ref<Input>) => {
  const { hasError, onChangeText, ...rest } = props;

  return (
    <View>
      <S.NameInput
        hasError={hasError}
        onChangeText={(text: string) => onChangeText(text)}
        ref={ref}
        {...rest}
      />
    </View>
  );
});
