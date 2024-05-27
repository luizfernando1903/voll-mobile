import { VStack, Text,ScrollView, Avatar, Divider } from "native-base";
import {Titulo} from '../componentes/Titulo'


export default function Perfil(){
    return(
        <ScrollView flex={1}>
        <VStack flex={1} alignItems="center" p={5}>
            <Text color="blue.500">Meu Perfil</Text>
            <Avatar size="xl" source={{
                uri:"https://github.com/robertomoraesjunior.png"
            }} mt={5}/>
            <Titulo color="blue.500">Informações Pessoais</Titulo>
            <Titulo fontSize="lg">Luiz Fernando</Titulo>
            <Titulo>19/03/2006</Titulo>
            <Titulo>Votuporanga / SP</Titulo>

            <Divider mt={5}/>

            <Titulo color="blue.500">Histórico Médico</Titulo>
            <Text fontSize={18}>Bronquite</Text>
            <Text fontSize={18}>Sinusite</Text>

        </VStack>
        </ScrollView>
    )
}