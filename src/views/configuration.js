//React import
import React from 'react'

//Context provider
import { useAplicationContext } from "../provider"

//Component import
import SwitchButton from "../components/switchButton"
import ViewContainer from '../components/viewContainer'
import TextView from '../components/text'

const Configuration = () =>{
    const { changeSchemaColor, changeTheme } = useAplicationContext()
    return (
        <ViewContainer>
          <TextView>
              Configuración
          </TextView>
          <SwitchButton onPress={changeSchemaColor} labels={["Verde (Aguacate)","Rojo (Jitomate)"]} value={["green","red"]} >
          </SwitchButton>
          <SwitchButton onPress={changeTheme} labels={["Claro (Colores vivos)","Oscuro (Protege vista)"]} value={["light","dark"]} >
          </SwitchButton>
        </ViewContainer>
    )
};
export default Configuration